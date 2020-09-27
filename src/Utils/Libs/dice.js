const rollDice = (numOfDice = 1) => {
    const rolls = [];
    for (let i = 0; i < numOfDice; i += 1) {
        rolls[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log('rollDice', rolls);
    return rolls;
};

export default rollDice;
