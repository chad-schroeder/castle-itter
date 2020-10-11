import store from '../../store';

export const gameOver = (message = '', hasWon) => {
    if (!hasWon) {
        console.log(`You lose: ${message}`);
    } else {
        console.log('You win!');
    }

    store.dispatch({ type: 'GAME_OVER', payload: hasWon });
};
