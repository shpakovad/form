import React from "react";
import style from "../../../ReduxForm/ReduxForm.module.css";
import {Field} from "redux-form";
import inputWs from "../../../FormControls/InputWs";


const DnsForm = (props) => {

    return (<>
            <div className={style.miniForm}>
                <span className={style.title}>Preferred DNS server:</span><span className={style.footnote}>*</span>
                <Field name="preferredDns1" component={inputWs} type="text"/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Alternative DNS server:</span>
                <Field name="alternativeDns1" component={inputWs} type="text"/>
            </div>
        </>
    );
};

export default (DnsForm)