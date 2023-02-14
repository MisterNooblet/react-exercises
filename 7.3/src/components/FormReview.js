import React from 'react'

const FormReview = (props) => {
    return (
        <div>
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.age}</div>
            <div>{props.freeText}</div>
            <div className='buttons'><button onClick={props.backButton}>Back</button><button onClick={props.sendButton}>Send Survey</button></div>
        </div>
    )
}

export default FormReview