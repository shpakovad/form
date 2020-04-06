import React from "react";
import style from "./FormControls.module.css";


const inputWs = (props) => {
    const { meta} = props;

    return (
        <>
            <input className={style.formInp} {...props.input} {...props} />
            {meta.error &&
            meta.touched &&
            <div className={style.errorValueWs}>
                {meta.error}
            </div>}
        </>
    )
};

export default inputWs;