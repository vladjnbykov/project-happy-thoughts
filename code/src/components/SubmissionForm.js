/* eslint-disable*/

import React, { useState, useEffect } from 'react'



const SubmissionForm = ({ messageNew, onMessageNewChange, onFormSubmit}) => {
    

    const messageBigSize = () => {
        
        if (messageNew.length > 140) {
            alert("your message is too big, max number of characters is 140")
            return true
        }
    }
    messageBigSize()

    
    
    return (
        <form className="form" onSubmit={onFormSubmit}>
                <label htmlFor="newMessage">What's make you happy right now?</label>
                <input className="input"
                    id="newMessage"
                    type="text"
                    value={messageNew}
                    onChange={onMessageNewChange}
                />    
                <p className="time-from-now">you can type {140 - messageNew.length} characters more</p>
                <button className="btn-submit" type="submit">💗 Send Happy Thought 💗</button>
        </form>
    )
    
} 


export default SubmissionForm