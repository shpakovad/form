import React from "react";
import style from "./FormControls.module.css";


const btnInputCheckbox = (props) => {
    const { meta} = props;
    return (
        <>
            <input className={style.checkboxInput}  {...props.input}{...props} />
            {meta.error &&
            meta.touched &&
            <div className={style.errorNetworkName}>
                {meta.error}
            </div>}
        </>
    )
};

export default btnInputCheckbox;