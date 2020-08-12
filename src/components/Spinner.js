import React from 'react'

function Spinner() {
    return (
      <div className="d-flex justify-content-center spin">
        <div className="spinner-grow text-danger mr-3" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning mr-3" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
}

export default Spinner
