import './Button.css'

const Button = (props) => {
    return props.class === '.btn-bold' ? <button className='btn-bold'>{props.name}</button> : <button>{props.name}</button>
}

export default Button