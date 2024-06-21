const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();

app.use(express.json()) //permite a api a ler JSON
app.use(cors()) //cors serve para permitir que o front-end acesse o back-end
app.use(router)


module.exports = app;