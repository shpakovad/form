import React from 'react';
import style from './FormControls.module.css'


const select = (props) => {
    const { meta} = props;
    return (
        <>
            <select className={style.formSelect} {...props.input} {...props}  />
            {meta.error &&
            meta.touched &&
            <div className={style.errorNetworkName}>
                {meta.error}
            </div>}

        </>
    )
};


export default select;