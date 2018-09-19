import React from 'react'

// Componente para ajudar a outros componentes fazerem a condicional sem a necessidade de utilizar o if do javascript

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}