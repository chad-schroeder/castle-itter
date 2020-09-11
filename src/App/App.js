import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

const App = () => {
    const { loading } = useSelector(state => state.common);

    const dispatch = useDispatch();

    return (
        <>
            <Map />
            <Units />
        </>
    );
};

export default App;
