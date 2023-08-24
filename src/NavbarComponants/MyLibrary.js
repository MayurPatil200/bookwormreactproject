import React, { useState } from 'react';
import ChildComponent from './Signin'; // Adjust the import path
import { Outlet } from 'react-router-dom';

const ParentComponent = () => {
    const [showChild, setShowChild] = useState(false);
    const [dataToSend, setDataToSend] = useState('');

    const handleClick = () => {
        setShowChild(true);
        setDataToSend('Hello from parent!'); // Set the data you want to send
    };

    return (
        <div>
            <button onClick={handleClick}>Show Child Component</button>
            <Outlet/>
            {showChild && <ChildComponent data={dataToSend} />}
        </div>
    );
};

export default ParentComponent;
