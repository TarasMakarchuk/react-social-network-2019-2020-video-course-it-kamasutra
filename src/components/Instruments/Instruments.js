import React from 'react';

const Instruments = (props) => {

    return (
        <>
            <li key={props.id}>
                {`${props.id}. ${props.toolNameRu} en: ${props.toolNameEn}`}
            </li>
        </>
    )
};

export default Instruments;