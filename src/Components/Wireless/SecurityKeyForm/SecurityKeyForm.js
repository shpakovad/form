import React from "react";
import style from "../../ReduxForm/ReduxForm.module.css";
import {Field} from "redux-form";
import input from "../../FormControls/Input";


const SecurityKeyForm = (props) => {

    return (<>
            <span className={style.title}>Security key: </span><span className={style.footnote}>*</span>
            <Field name="securityKey" component={input} type="text"/>
        </>
    );
};

export default (SecurityKeyForm)