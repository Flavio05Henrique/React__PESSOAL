import './TextFild.css'

const TextFild = props => {
    const text = props.fieldName

    const ifChange = (event) => {
        props.ifChange(event.target.value)
    }
    
    return (
        <div className='text_field'>
            <input type='text' id={text} required   value={props.val} onChange={ifChange}/>
            <label className='ativa'>{text}</label>
        </div>  
    )
}

export default TextFild