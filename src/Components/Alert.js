import React from 'react'

export default function Alert(props) {
    // to Capitalize first word.
    const capatilize = (word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // In JS ( props.alert ) this will evaluate first if its false then it will not run next commands
        props.alert &&
        <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.typ)}</strong> : {props.alert.msg}
        </div>
    );
};
