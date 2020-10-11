import store from '../../store';

const scoreFrench = (tiles, allies) => {
    let tally = 0;

    const french = allies
        .filter(ally => ally.nationality === 'FRA' && !ally.kia && !ally.hasEscaped)
        .map(ally => ally.id);

    tiles.forEach(tile => {
        if (french.includes(tile.unit)) {
            if (tile.location !== 'C') { // if outide the cellar
                tally += 3;
            } else {
                tally += 1;
            }
        }
    });

    return tally;
};

const scoreNonFrench = (tiles, allies) => {
    let tally = 0;

    const nonFrench = allies
        .filter(ally => ally.nationality !== 'FRA' && !ally.kia)
        .map(ally => ally.id);

    tiles.forEach(tile => {
        if (nonFrench.includes(tile.unit)) {
            tally += 1;
        }
    });
    
    return tally;
};

const scoreAxis = (tracks) => {
    let tally = 0;

    Object.keys(tracks).forEach(key => {
        if (tracks[key].counter) {
            tally += 1;
        }
    });
        
    return tally;
};

export const calculateScore = () => {
    const { tankDestroyed, tankCasualties, hasEscaped } = store.getState().common;
    const { tiles, tracks } = store.getState().map;
    const { allies } = store.getState().units;

    let score = 0;

    // 5 points: Besotten Jenny was destroyed but no defenders were inside
    if (tankDestroyed && !tankCasualties.length) {
        score += 5;
    }

    // 5 points: Borotra hasEscaped
    if (hasEscaped) {
        score += 5;
    }

    // 3 points for each French defender on the board but not in the cellar
    // 1 point for each French defender in the cellar
    score += scoreFrench(tiles, allies);

    // 1 point for any other defender on the board (including the cellar)
    score += scoreNonFrench(tiles, allies);

    // subtract 1 point for each SS counter on the board
    score -= scoreAxis(tracks);
    
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

export const getScore = () => {
    const score = calculateScore();
    const { award, victory } = getMedal(score);
    return { score, award, victory };
};