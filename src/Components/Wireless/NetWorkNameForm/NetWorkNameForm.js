import React from 'react';
import style from '../../ReduxForm/ReduxForm.module.css'
import {Field} from 'redux-form';
import select from '../../FormControls/Select';

const NetworkNameForm = (props) => {

    const {clearFields} = props;

    let clear = () => {
        clearFields(false, false, 'selectedNetworkName');
    };

    return (
        <div className={style.miniForm}>
            <span className={style.title}>Wireless Network Name: </span>
            <span className={style.footnote}>*</span>
            <div>
                <Field name='selectedNetworkName' component={select}>
                    <option name='Please select'>Please select</option>
                    <option name='Network 1'>Network 1</option>
                    <option name='Network 2'>Network 2</option>
                    <option name='Network 3'>Network 3</option>
                </Field>
            </div>
            <button className={style.btnReset} type="button" name='resetButton' onClick={clear} value='resetBtn'>
            </button>
        </div>
    );
};


export default (NetworkNameForm)