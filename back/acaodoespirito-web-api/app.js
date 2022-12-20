require('dotenv').config();

const mongoose= require('mongoose');
const express = require('express');

const userRoutes = require('./src/route/UserRoutes');
const teamRoutes = require('./src/route/TeamRoutes');

const app = express();
app.use(express.json());//configurando api pra uso de json
//rotas
app.use('/users/', userRoutes);
app.use('/team/', teamRoutes)

const dbUser = process.env.MONGODBUSER;
const passUser = process.env.MONGODBPASS;

const connectionUrl = `mongodb+srv://${dbUser}:${passUser}@cluster0.zhfreiq.mongodb.net/?retryWrites=true&w=majority`;
//conectando no banco
mongoose.connect(connectionUrl)
        .then(() => {
            console.log('Conectado com sucesso ao banco de dados!');
            app.listen(3001, () => console.log('Servidor rodando na porta 3001!'));
        }).catch((err) => console.error(err));