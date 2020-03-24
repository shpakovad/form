import React from 'react';
import style from '../../ReduxForm/ReduxForm.module.css'
import {Field} from 'redux-form';
import input from '../../FormControls/Input';


const IpForm = (props) => {

    return (<>
            <div className={style.miniForm}>
                <span className={style.title}>IP address: </span><span className={style.footnote}>*</span>
                <Field name='ipAddress' component={input} type='text'/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Subnet Mask:</span> <span className={style.footnote}>*</span>
                <Field name='subnetMask' component={input} type='text'/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Default Gateway:</span>
                <Field name='defaultGateway' component={input} type='text'/>
            </div>
        </>
    );
}


export default (IpForm)