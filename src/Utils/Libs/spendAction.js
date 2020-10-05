import changeTurn from './changeTurn';

import store from '../../store';

const spendAction = () => {
    let { actionsRemaining } = store.getState().common;

    if (actionsRemaining === 1) {
        console.log('player turn changed');
        changeTurn();
    } else {
        actionsRemaining -= 1;
        console.log('actionsRemaining:', actionsRemaining);
        store.dispatch({ type: 'SPEND_ACTION', payload: actionsRemaining });
    }    
};

export default spendAction;
