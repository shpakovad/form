import React from 'react';
import style from '../../ReduxForm/ReduxForm.module.css'
import {Field} from 'redux-form';
import btnInput from '../../FormControls/BtnInput';

const BtnRadioIpForm = (props) => {

    const {checkedAutoBtnIp} = props;

    return (<>
            <Field name='radioBtn' component={btnInput} type='radio' value='radioBtn1' checked={!checkedAutoBtnIp}/>
            <div className={style.titleAuto}>
                <span>Obtain an IP address automatically (DHCP/BootP)</span>
            </div>
            <div>
                <Field name='radioBtn' component={btnInput} type='radio' value='radioBtn2' checked={checkedAutoBtnIp}/>
                <div className={style.titleFollow}>
                    <span>Use the following IP address:</span>
                </div>
            </div>
        </>
    );
};


export default (BtnRadioIpForm)