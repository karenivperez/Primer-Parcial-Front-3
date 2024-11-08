import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [inf1, setInf1] = useState('');
    const [inf2, setInf2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inf1.length >= 3 && inf1[0] !== ' ' && inf2.length >= 6) {
            setError('');
            onSubmit({ inf1, inf2 });
        } else {
            setError('Por favor chequea que la informacion sea correcta');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inf1}
                    onChange={(e) => setInf1(e.target.value)}
                    placeholder="Primer nombre"
                />
                <input
                    type="text"
                    value={inf2}
                    onChange={(e) => setInf2(e.target.value)}
                    placeholder="Segundo nombre"
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{ color: 'green' }}>{error}</p>}
        </div>
    );
};

export default Form;