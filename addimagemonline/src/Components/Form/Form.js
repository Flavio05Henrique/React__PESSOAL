import { useState } from 'react'
import TextFild from '../TextField/TextFild'
import './Form.css'



const Form = props => {
    const [value, setValue] = useState('https://criticalhits.com.br/wp-content/uploads/2022/07/Mashle-Magic-and-Muscles.jpg') 

    const submit = (event) => {
        event.preventDefault()
        props.byAdding(value)
    }

    return (
        <form className='form' onSubmit={ event => submit(event)}>
            <TextFild 
                fieldName={props.fildName} 
                ifChange={valor => setValue(valor)} 
                val={value}
            />
        </form>
    )
}

export default Form