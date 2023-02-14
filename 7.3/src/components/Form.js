import React, { useState } from 'react'
import FormReview from './FormReview'

const Form = () => {
    const formData = {
        firstName: '',
        lastName: '',
        age: '0-15',
        freeText: ''
    }
    const [reviewVisibility, setReviewVisibility] = useState(false)
    const [formAvailability, setFormAvalability] = useState(false)
    const [data, setData] = useState(formData)

    const firstNameHandler = (e) => {
        const value = e.target.value
        setData(
            {
                ...data,
                firstName: value
            }
        )

    }
    const lastNameHandler = (e) => {
        const value = e.target.value
        setData(
            {
                ...data,
                lastName: value
            }
        )
    }
    const ageHandler = (e) => {
        const value = e.target.value
        setData(
            {
                ...data,
                age: value
            }
        )
    }
    const freeTextHandler = (e) => {
        const value = e.target.value
        setData(
            {
                ...data,
                freeText: value
            }
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setReviewVisibility(true)
        setFormAvalability(true)
    }
    const backToForm = () => {
        setReviewVisibility(false)
        setFormAvalability(false)
    }
    const sendForm = () => {
        setReviewVisibility(false)
        setFormAvalability(false)
        setData(formData)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <span>First Name:</span><input type='text' disabled={formAvailability} value={data.firstName} onChange={firstNameHandler}></input>
                </div>
                <div>
                    <span>Last Name:</span><input type='text' disabled={formAvailability} value={data.lastName} onChange={lastNameHandler}></input>
                </div>
                <div className='center'>
                    <span>Age:</span><select disabled={formAvailability} value={data.age} onChange={ageHandler}>
                        <option value="0-15">0-15</option>
                        <option value="15-18">15-18</option>
                    </select>
                </div>
                <div>
                    <span>Free Text:</span><textarea disabled={formAvailability} value={data.freeText} onChange={freeTextHandler}></textarea>
                </div>
                <button disabled={formAvailability}>Continue</button>
            </form>
            {reviewVisibility && <FormReview {...data} backButton={backToForm} sendButton={sendForm} />}
        </div>
    )
}

export default Form