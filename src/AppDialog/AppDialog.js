import React from 'react';

const AppDialog = ({ message = '' }) => {
    if (message) {
        console.log('Message', message);
        return (<p>AppDialog</p>);
    }
    return null;
};

export default AppDialog;
