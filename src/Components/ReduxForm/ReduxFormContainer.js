import React from 'react';
import ReduxForm from './ReduxForm'
import {getFormValues} from 'redux-form';
import {connect} from 'react-redux';

let ReduxFormContainer = (props) => {

    let submit = (values) => {
        console.log(JSON.stringify({
                'ethernetSettings': {
                    'ipAddress': values.ipAddress,
                    'subnetMask': values.subnetMask,
                    'defaultGateway': values.defaultGateway,
                    'preferredDnsServer': values.preferredDns,
                    'alternativeDnsServer': values.alternativeDns,
                },
                'wirelessSettings': {
                    'networkName': values.selectedNetworkName,
                    'securityKey': values.securityKey,
                    ' ipAddress': values.ipAddress1,
                    'subnetMask': values.subnetMask1,
                    'defaultGateway': values.defaultGateway1,
                    'preferredDnsServer': values.preferredDns1,
                    'alternativeDnsServer': values.alternativeDns1,
                }
            })
        )
    };
    return <ReduxForm onSubmit={submit} formValues={props.formValues} {...props}/>
};

function mapStateToProps(state) {
    const formValues = getFormValues('fillingForm')(state) || {};
    return {
        formValues,
    };
}

ReduxFormContainer = connect(
    mapStateToProps,
    null
)(ReduxFormContainer);

export default (ReduxFormContainer);