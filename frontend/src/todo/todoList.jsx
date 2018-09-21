import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    // funcao para renderizar as linhas das tabelas
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
                </td>

            </tr>
        ))
    }

    // estrutura da tabela
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}