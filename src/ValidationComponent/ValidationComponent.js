import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            {props.length}
            <p>{props.message}</p>
        </div>
    )
    
}

export default validationComponent;