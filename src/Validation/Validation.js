export const validate = (values) => {

    const errors = {};

    if (values.radioBtn === 'radioBtn1') {
        values.ipAddress = '';
        values.subnetMask = '';
        values.defaultGateway = ''
    }

    if (values.radioBtnDns === 'radioBtn3') {
        values.preferredDns = '';
        values.alternativeDns = '';
    }

    if (values.radioBtn1 === 'radioBtn5') {
        values.ipAddress1 = '';
        values.subnetMask1 = '';
        values.defaultGateway1 = ''
    }

    if (values.radioBtnDns1 === 'radioBtn7') {
        values.preferredDns1 = '';
        values.alternativeDns1 = '';
    }
    if (values.checkboxEnableWifi === false) {
        values.selectedNetworkName = '';
    }
    if (values.checkboxEnableKey === false) {
        values.securityKey = ''
    }


    if (values.radioBtn === 'radioBtn2') {
        if (!values.subnetMask) {
            errors.subnetMask = 'Required!';
        } else if (!values.subnetMask.match(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)) {
            errors.subnetMask = 'Invalid Subnet Mask!';
        }

        if (!values.ipAddress) {
            errors.ipAddress = 'Required!';
        } else if (values.ipAddress) {
            let arrIp = values.ipAddress.split(".");
            if (arrIp.length !== 4) {
                errors.ipAddress = 'Invalid IP address!'
            }
            for (let oct of arrIp) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.ipAddress = 'Invalid IP address!';
                }
            }
        }
        if (values.defaultGateway) {
            let arrWay = values.defaultGateway.split(".");
            if (arrWay.length !== 4) {
                errors.defaultGateway = 'Invalid Way!'
            }
            for (let oct of arrWay) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.defaultGateway = 'Invalid Way!';
                }
            }
        }
    }

    if (values.radioBtnDns === 'radioBtn4') {
        if (!values.preferredDns) {
            errors.preferredDns = 'Required!';
        } else if (values.preferredDns) {
            let arrPrefDns = values.preferredDns.split(".");
            if (arrPrefDns.length !== 4) {
                errors.preferredDns = 'Invalid DNS address!'
            }
            for (let oct of arrPrefDns) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.preferredDns = 'Invalid DNS address!';
                }
            }
        }
        if (values.alternativeDns) {
            let arrAltDns = values.alternativeDns.split(".");
            if (arrAltDns.length !== 4) {
                errors.alternativeDns = 'Invalid DNS address!'
            }
            for (let oct of arrAltDns) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.alternativeDns = 'Invalid DNS address!';
                }
            }
        }
    }

    if (values.checkboxEnableWifi === true) {
        if (!values.selectedNetworkName || values.selectedNetworkName === "Please select") {
            errors.selectedNetworkName = 'Required!';
        }
    }
    if (values.checkboxEnableKey === true) {
        if (!values.securityKey) {
            errors.securityKey = 'Required!';
        } else if (values.securityKey.length < 8) {
            errors.securityKey = 'Key must be at least 8 symbols!';
        }
    }

    if (values.radioBtn1 === "radioBtn6") {
        if (!values.subnetMask1) {
            errors.subnetMask1 = 'Required!';
        } else if (!values.subnetMask1.match(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)) {
            errors.subnetMask1 = 'Invalid Subnet Mask!';
        }

        if (!values.ipAddress1) {
            errors.ipAddress1 = 'Required!';
        } else if (values.ipAddress1) {
            let arrIp = values.ipAddress1.split(".");
            if (arrIp.length !== 4) {
                errors.ipAddress1 = 'Invalid IP address!'
            }
            for (let oct of arrIp) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.ipAddress1 = 'Invalid IP address!';
                }
            }
        }
        if (values.defaultGateway1) {
            let arrWay = values.defaultGateway1.split(".");
            if (arrWay.length !== 4) {
                errors.defaultGateway1 = 'Invalid Way!'
            }
            for (let oct of arrWay) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.defaultGateway1 = 'Invalid Way!';
                }
            }
        }

    }

    if (values.radioBtnDns1 === 'radioBtn8') {
        if (!values.preferredDns1) {
            errors.preferredDns1 = 'Required!';
        } else if (values.preferredDns1) {
            let arrPrefDns = values.preferredDns1.split(".");
            if (arrPrefDns.length !== 4) {
                errors.preferredDns1 = 'Invalid DNS address!'
            }
            for (let oct of arrPrefDns) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.preferredDns1 = 'Invalid DNS address!';
                }
            }
        }
        if (values.alternativeDns1) {
            let arrAltDns = values.alternativeDns1.split(".");
            if (arrAltDns.length !== 4) {
                errors.alternativeDns1 = 'Invalid DNS address!'
            }
            for (let oct of arrAltDns) {
                if (isNaN(oct) || Number(oct) < 0 || Number(oct) > 255) {
                    errors.alternativeDns1 = 'Invalid DNS address!';
                }
            }
        }
    }

    return errors;

};
