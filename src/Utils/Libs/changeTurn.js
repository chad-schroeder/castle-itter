import store from '../../store';

const changeTurn = () => {
    // inverse boolean for 'playerTurn'
    let playerTurn = !store.getState().common.playerTurn;

    // if player, set to 5 actions, otherwise AI gets 3
    const actionsRemaining = playerTurn ? 5 : 3;

    const payload = {
        playerTurn,
        actionsRemaining,
    };

    store.dispatch({ type: 'CHANGE_TURN', payload });
};

export default changeTurn;
