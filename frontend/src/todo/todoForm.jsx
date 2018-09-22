import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='8 9 10'>
            <input type='text' id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='4 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
        </Grid>
       
    </div>
)