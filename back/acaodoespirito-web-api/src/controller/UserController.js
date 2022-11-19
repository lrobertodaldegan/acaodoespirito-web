const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../model/User');

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id, '-password');

    if(!user)
        return res.status(404).json({msg:'Usuário não existe!'});

    res.status(200).json({msg: 'Consulta realizada com sucesso!', user});
}

const registerUser = async (req, res) => {
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
}

const userLogin = async (req, res) => {
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
}

module.exports = {
    getUserById,
    userLogin,
    registerUser
}