import React from 'react';
import style from '../ReduxForm/ReduxForm.module.css';
import btnInputCheckbox from '../FormControls/BtnInputCheckbox';
import {Field} from 'redux-form';
import NetWorkNameForm from './NetWorkNameForm/NetWorkNameForm';
import SecurityKeyForm from './SecurityKeyForm/SecurityKeyForm';
import Ethernet from "./Ethernet/Ethernet";


const Wireless = (props) => {

    const {formValues} = props;

    let checkedWifi = formValues.checkboxEnableWifi === true;

    let checkedKey = formValues.checkboxEnableKey === true;

    let enableWifi = !checkedWifi ? `${style.disabled}` : ``;

    let enableKeySecurity = !checkedKey ? `${style.miniFormWS} ${style.disabled}` : `${style.miniFormWS}`;

    return (<div className={style.wrapperWireless}>
            <Field name='checkboxEnableWifi' component={btnInputCheckbox} type='checkbox'
                   checked={checkedWifi} value='checkedBtn'/>
            <span className={style.titleEnableWifi}>Enable wifi:</span>
            <div className={enableWifi}>
                <NetWorkNameForm {...props}/>
                <div>
                    <Field name='checkboxEnableKey' component={btnInputCheckbox} type='checkbox'
                           checked={checkedKey} value='checkedBtnKey'/>
                    <span className={style.titleEnableWifi}>Enable Wireless Security :</span>
                    <div className={enableKeySecurity}>
                        <SecurityKeyForm/>
                    </div>
                    <Ethernet {...props}/>
                </div>
            </div>
        </div>
    );
};


export default (Wireless)