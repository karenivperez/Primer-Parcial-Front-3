import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const App = () => {
    const [data, setData] = useState(null);

    const handleFormSubmit = (formData) => {
        setData(formData);
    };

    return (
        <div className="App">
            <h1>¿Que nombre le pondrias a una mascota?</h1>
            
            <Form onSubmit={handleFormSubmit} />
            {data && <Card inf1={data.inf1} inf2={data.inf2} />}
        </div>
    );
};

export default App;