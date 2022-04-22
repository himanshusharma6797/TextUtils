import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }

    return (
        // if first is true in the && then it will go for the second but if it is false or null then it will terminate
        props.alert 
        // this is happens because all the jsx will be converted to javascript Calls!
        && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert