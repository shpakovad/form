import React from 'react';
import style from './WrapperForm.module.css';
import ReduxFormContainer from '../ReduxForm/ReduxFormContainer';

const WrapperForm = () => {

    return (
        <div className={style.wrapper}>
            <ReduxFormContainer/>
        </div>
    );
};

export default WrapperForm

