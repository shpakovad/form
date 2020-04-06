import React from "react";
import style from "../../../ReduxForm/ReduxForm.module.css";
import {Field} from "redux-form";
import inputWs from "../../../FormControls/InputWs";


const IpForm = (props) => {

    return (<>
            <div className={style.miniForm}>
                <span className={style.title}>IP address: </span><span className={style.footnote}>*</span>
                <Field name="ipAddress1" component={inputWs} type="text"/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Subnet Mask:</span> <span className={style.footnote}>*</span>
                <Field name="subnetMask1" component={inputWs} type="text"/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Default Gateway:</span>
                <Field name="defaultGateway1" component={inputWs} type="text"/>
            </div>
        </>
    );
};

export default (IpForm)