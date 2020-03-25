import React from 'react';
import style from '../ReduxForm/ReduxForm.module.css';
import {reduxForm} from 'redux-form';
import {validate} from '../../Validation/Validation';
import FormSubmit from '../FormSubmit/FormSubmit';
import Ethernet from '../Ethernet/Ethernet';
import Wireless from '../Wireless/Wireless';


const ReduxForm = (props) => {

    const {handleSubmit} = props;

    return (

        <form onSubmit={handleSubmit}>
            <div className={style.wrapperForm}>
                <div className={style.wrapperTitle}>
                    <span>Ethernet Settings</span>
                </div>

                <div className={style.wrapper}>
                    <Ethernet {...props} />
                </div>

                <div className={style.wrapperTitleWS}>
                    <span>Wireless Settings</span>
                </div>

                <Wireless {...props}/>

                <FormSubmit {...props}/>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'fillingForm',
    validate
})(ReduxForm);