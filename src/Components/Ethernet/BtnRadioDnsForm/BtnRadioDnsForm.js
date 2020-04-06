import React from "react";
import style from "../../ReduxForm/ReduxForm.module.css";
import {Field} from "redux-form";
import btnInput from "../../FormControls/BtnInput";


const BtnRadioDnsForm = (props) => {

    const {checkedAutoBtnDns} = props;

    return (<>
            <Field name="radioBtnDns" component={btnInput} type="radio" value="radioBtn3" checked={!checkedAutoBtnDns}/>
            <div className={style.titleAuto}>
                <span>Obtain DNS server address automatically</span>
            </div>
            <div>
                <Field name="radioBtnDns" component={btnInput} type="radio" value="radioBtn4"
                       checked={checkedAutoBtnDns}/>
                <div className={style.titleFollow}>
                    <span>Use the following DS server address:</span>
                </div>
            </div>
        </>
    );
};

export default (BtnRadioDnsForm)