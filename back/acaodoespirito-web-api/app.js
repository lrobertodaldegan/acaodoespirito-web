require('dotenv').config();

const express = require('express');
const mongoose= require('mongoose');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./model/User');

//middleware
const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token)
        return res.status(401).json({msg:'Acesso negado!'});

    try{
        jwt.verify(token, process.env.SECRET);

        next();
    }catch(err){
        res.status(400).json({msg: 'Token inválido!'});
    }
}

const app = express();
app.use(express.json());//configurando api pra uso de json
//rotas
app.get('/', (req, res) => res.status(200).json({msg: 'bem-vindo!'}));
app.post('/auth/register', async (req, res) => {
    const {name, pass} = req.body;
    //verificando informações na request payload
    if(!name || !pass)
        return res.status(422).json({msg:'Campos obrigatórios não informados!'});
    //verificando se usuário existe
    const userExists = await User.findOne({username: name});

    if(userExists)
        return res.status(422).json({msg:'Usuário já existe!'});
    //criptografando a senha
    const salt = await bcrypt.genSalt(12);
    const passHash = await bcrypt.hash(pass, salt);
    //criando usuário
    const newUser = new User({username: name, password: passHash});

    try{
        await newUser.save();

        res.status(201).json({msg: 'Usuário criado com sucesso!'});
    } catch(err) {
        console.error(err);
        res.status(500).json({msg: 'Não foi possível criar usuário!'});
    }
});
app.post('/auth/login', async (req, res) => {
    const {name, pass} = req.body;
    //verificando informações na request payload
    if(!name || !pass)
        return res.status(422).json({msg:'Campos obrigatórios não informados!'});
    //verificando se usuário existe
    const user = await User.findOne({username: name});

    if(!user)
        return res.status(404).json({msg:'Usuário não existe!'});
    //verificando a senha
    const passMatches = await bcrypt.compare(pass, user.password);

    if(!passMatches)
        return res.status(422).json({msg:'Senha incorreta!'});

    try{
        const secret = process.env.SECRET;

        const token = jwt.sign({id: user._id}, secret, { expiresIn: 60 * 60 });//expira em 1h

        res.status(200).json({msg: 'Login realizado com sucesso!', access_token: token});
    } catch(err) {
        console.error(err);
        res.status(500).json({msg: 'Não foi possível realizar o login!'});
    }
});
//rota privada
app.get('/user/:id', checkToken, async (req, res) => {
    const user = await User.findById(req.params.id, '-password');

    if(!user)
        return res.status(404).json({msg:'Usuário não existe!'});

    res.status(200).json({msg: 'Consulta realizada com sucesso!', user});
});

const dbUser = process.env.MONGODBUSER;
const passUser = process.env.MONGODBPASS;

const connectionUrl = `mongodb+srv://${dbUser}:${passUser}@cluster0.zhfreiq.mongodb.net/?retryWrites=true&w=majority`;
//conectando no banco
mongoose.connect(connectionUrl)
        .then(() => {
            console.log('Conectado com sucesso ao banco de dados!');
            app.listen(3001);
        })
        .catch((err) => {
            console.error(err);
        });