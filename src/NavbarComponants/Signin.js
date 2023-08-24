// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            {/* Use the props data here */}
            <p>Received Data: {props.data}</p>
        </div>
    );
};

export default ChildComponent;
