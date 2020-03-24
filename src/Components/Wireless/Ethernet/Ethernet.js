import React from 'react';
import BtnRadioIpForm from "./BtnRadioIpForm/BtnRadioIpForm";
import IpForm from "./IpForm/IpForm";
import BtnRadioDnsForm from "./BtnRadioDnsForm/BtnRadioDnsForm";
import DnsForm from "./DnsForm/DnsForm";
import style from "../../ReduxForm/ReduxForm.module.css";


const Ethernet = (props) => {

    const {formValues} = props;

    let checkedAutoBtnIp = formValues.radioBtn1 === 'radioBtn6';

    let checkedAutoBtnDns = formValues.radioBtnDns1 === 'radioBtn8';

    let enableIpForm = !checkedAutoBtnIp ? `${style.disabled}` : ``;

    let enableDnsForm = !checkedAutoBtnDns ? `${style.disabled}` : ``;


    return ( <>
                    <BtnRadioIpForm checkedAutoBtnIp={checkedAutoBtnIp} {...props}/>
                    <div className={enableIpForm}>
                        <IpForm/>
                    </div>
                    <BtnRadioDnsForm checkedAutoBtnDns={checkedAutoBtnDns} {...props}/>
                    <div className={enableDnsForm}>
                        <DnsForm/>
                    </div>
                </>

    );
};


export default (Ethernet)