import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='10 9 11'>
            <input type='text' id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='2 3 1'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)