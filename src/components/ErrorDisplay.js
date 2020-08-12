import React from 'react'
import ErrorImage from 'images/error.png'

function ErrorDisplay() {
    return (
        <div className="card mb-3 cards">
            <img className="card-img-top" src={ErrorImage} alt="error" />
            <div className="card-body">
                <h5 className="card-title">Oops an Error</h5>
                <p className="card-text">Sometimes you don't get what you want</p>
                <p className="card-text">Instead of giving up, why don't you punch back?</p>
                <p className="card-text">
                    <small className="text-muted">Try again bud</small>
                </p>
            </div> 
        </div>
    )
}

export default ErrorDisplay
