import React from "react";
import style from "./FormControls.module.css";


const input = (props) => {

    const {meta} = props;

    return (
        <>
            <input className={style.formInp} {...props.input} {...props}  />
            {meta.error && meta.touched &&
            <div className={style.errorValue}>
                {meta.error}
            </div>}
        </>
    )
};

export default input;