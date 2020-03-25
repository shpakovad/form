import React from 'react';
import style from '../FormSubmit/FormSubmit.module.css'

const FormSubmit = (props) => {

    const {submitting, pristine, reset} = props;

    return (
        <div className={style.wrapperSubm}>
            <button className={style.btnSave} type='submit' disabled={submitting}>Save</button>
            <button className={style.btnCancel} type='button' disabled={pristine || submitting}
                    onClick={reset}> Cancel
            </button>
        </div>
    );
};

export default FormSubmit