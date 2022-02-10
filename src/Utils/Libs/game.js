// import playCard from './playCard';

import store from '../../store';

// export const spendAction = () => {
//     let { playerTurn, actionsRemaining } = store.getState().app;

//     if (playerTurn) {
//         // show player options
//         console.log('player option:', actionsRemaining);
//     } else {
//         // play Axis card
//         playCard();
//     }

//     if (actionsRemaining === 1) {
//         console.log('player turn changed');
//         changeTurn();
//     } else {
//         actionsRemaining -= 1;
//         store.dispatch({ type: 'SPEND_ACTION', payload: actionsRemaining });
//     }    
// };

// export const changeTurn = () => {
//     let playerTurn = !store.getState().app.playerTurn;

//     const actionsRemaining = playerTurn ? 5 : 3;

//     store.dispatch({ type: 'CHANGE_TURN', payload: { playerTurn, actionsRemaining } });
// };

// export const gameOver = (message = '', hasWon) => {
//     if (!hasWon) {
//         console.log(`You lose: ${message}`);
//     } else {
//         console.log('You win!');
//     }

//     store.dispatch({ type: 'GAME_OVER', payload: hasWon });
// };
