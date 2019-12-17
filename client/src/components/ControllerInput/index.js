import React, { useState } from 'react';

const ControllerInput = ({label, name, setter, defaultValue, refProp, type}) => {
    function setterCoercion() {
        if (type === 'number') {
            return Number(refProp.current.value);
        } else if (type === 'checkbox') {
            return refProp.current.value === 'false' ? true: false;
        }
    }

    return (
        <label htmlFor={name}>
            {label}
            <input 
                type={type}
                name={name}
                defaultValue={defaultValue}
                ref={refProp}
                onChange={() => type === 'checkbox' && typeof defaultValue !== undefined && setter(setterCoercion())}
            />
            {type!=='checkbox' && (<button 
                    onClick={()=>refProp.current.value !== defaultValue && setter(setterCoercion())}
                >
                    Set
                </button>
            )}
        </label>
    );
}

export default ControllerInput;