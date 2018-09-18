const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) // para retornar o registro atualizado e aplicar validacoes

module.exports = Todo

