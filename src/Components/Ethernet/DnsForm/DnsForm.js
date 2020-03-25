import React from 'react';
import style from '../../ReduxForm/ReduxForm.module.css'
import {Field} from 'redux-form';
import input from '../../FormControls/Input';

const DnsForm = (props) => {

    return (<>
            <div className={style.miniForm}>
                <span className={style.title}>Preferred DNS server:</span><span className={style.footnote}>*</span>
                <Field name='preferredDns' component={input} type='text'/>
            </div>
            <div className={style.miniForm}>
                <span className={style.title}>Alternative DNS server:</span>
                <Field name='alternativeDns' component={input} type='text'/>
            </div>
        </>
    );
};


export default (DnsForm)