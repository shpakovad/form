import React from "react";
import style from "./FormControls.module.css";


const btnInput = (props) => {
    const { meta} = props;
    return (
        <>
            <input  {...props.input} {...props} />
            {meta.error &&
            meta.touched &&
            <div className={style.errorValue}>
                {meta.error}
            </div>}
        </>
    )
};

export default btnInput;