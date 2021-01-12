import React from "react";


const ResetButton = () => {
    return (
        <button
            className="ResetButton"
            onClick={() => window.location.reload()}
        >
            RESET
        </button>
    )
} 

export default ResetButton