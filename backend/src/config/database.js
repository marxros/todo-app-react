const mongoose = require('mongoose')
mongoose.Promise = global.Promise // utilizar a Promise do prorpio node para não gerar mensagem de advertencia no console
module.exports = mongoose.connect('mongodb://localhost/todo')