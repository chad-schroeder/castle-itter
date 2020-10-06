import store from '../../store';

const getFrenchCount = () => {
    const { tiles } = store.getState().map;
    const { allies } = store.getState().units;

    let score = 0;

    // get list of all surviving french units; do not count Borotra if he escaped
    const french = allies
        .filter(ally => ally.nationality === 'FRA' && !ally.kia && !ally.escaped)
        .map(ally => ally.id);

    // compute score
    tiles.forEach(tile => {
        if (french.includes(tile.unit)) {
            if (tile.location !== 'C') { // if not located in the cellar
                score += 3;
            } else { // if located in the cellar
                score += 1;
            }
        }
    });

    return score;
};

const getNonFrenchCount = () => {
    const { tiles } = store.getState().map;
    const { allies } = store.getState().units;

    let count = 0;

    // get list of all surviving non-French units
    const nonFrench = allies
        .filter(ally => ally.nationality !== 'FRA' && !ally.kia)
        .map(ally => ally.id);

    // for each tile with a non-French unit, increase count by one
    tiles.forEach(tile => {
        if (nonFrench.includes(tile.unit)) {
            count += 1;
        }
    });
    
    return count;
};

const getAxisBoardCount = () => {
    const { tracks } = store.getState().map;
    let count = 0;

    Object.keys(tracks).forEach(key => {
        if (tracks[key].counter) {
            count += 1;
        }
    });
        
    return count;
};

export const getScore = () => {
    const { besottenJennyDestroyed, besottenJennyCasualties, escaped } = store.getState().common;
    
    let score = 0;

    // 5 points: Besotten Jenny was destroyed but no defenders were inside
    if (besottenJennyDestroyed && !besottenJennyCasualties.length) {
        score += 5;
    }

    // 5 points: Borotra escaped
    if (escaped) {
        score += 5;
    }

    // 3 points for each French defender on the board but not in the cellar
    // 1 point for each French defender in the cellar
    score += getFrenchCount();

    // 1 point for any other defender on the board (including the cellar)
    score += getNonFrenchCount();

    // subtract 1 point for each SS counter on the board
    score -= getAxisBoardCount();
    
    return score;
};

export const getMedal = (score) => {
    let award = null;
    let victory = 'Draw';

    if (score >= 40) {
        award = 'Austrian National Hero';
        victory = 'Epic Victory';
    } else if (score >= 30) {
        award = 'Medal of Honor';
        victory = 'Major Victory';
    } else if (score >= 20) {
        award = 'Distinguished Service Cross';
        victory = 'Major Victory';
    } else if (score >= 10) {
        award = 'Silver Star';
        victory = 'Minor Victory';
    } else if (score >= 1) {
        award = 'Bronze Star';
        victory = 'Minor Victory';
    }

    return { award, victory };
};

export const getFinalScore = () => {
    const score = getScore();
    const { award, victory } = getMedal(score);

    console.log('endGame', { score, award, victory });
};