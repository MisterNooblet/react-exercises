import './Buttons.css'
import Button from './Button'

const Buttons = (props) => {
    const btn1 = props.buttonNames.btn1
    const btn1class = props.buttonNames.btn1class
    const btn2 = props.buttonNames.btn2
    return (
        <div className='buttons'>
            <Button class={btn1class} name={btn1} />
            <Button name={btn2} />
        </div>

    )
}

export default Buttons