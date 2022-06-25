import React from 'react'

const Alert = (props) => {

    function convertTitle(newType){
        newType = newType.toLowerCase();
        return newType[0].toUpperCase() + newType.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${(props.alert.type)} alert-dismissible fade show`} role="alert">
            <strong>{convertTitle(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert