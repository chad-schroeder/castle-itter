import store from '../../store';

const { tankDestroyed, tankCasualties, hasEscaped } = store.getState().app;
const { tiles, tracks } = store.getState().map;
const { defenders } = store.getState().units;

const getSurvivors = () => {
    const french = [];
    const nonFrench = [];

    Object.keys(defenders).forEach(ally => {
        if (ally.nationality === 'FRA' && !ally.casualty && !ally.hasEscaped) {
            french.push(ally.id);
        } else {
            nonFrench.push(ally.id);
        }
    });

    return [french, nonFrench];
};

const scoreFrench = () => {
    let tally = 0;

    const [french] = getSurvivors();

    tiles.forEach(tile => {
        if (french.includes(tile.unit)) {
            if (tile.location === 'C') { // reduce score if inside the cellar
                tally += 1;
            } else {
                tally += 3;
            }
        }
    });

    return tally;
};

const scoreNonFrench = () => {
    let tally = 0;

    const [_, nonFrench] = getSurvivors();

    tiles.forEach(tile => {
        if (nonFrench.includes(tile.unit)) {
            tally += 1;
        }
    });
    
    return tally;
};

const scoreAxis = () => {
    let tally = 0;

    Object.keys(tracks).forEach(key => {
        if (tracks[key].counter) {
            tally += 1;
        }
    });
        
    return tally;
};

export const calculateScore = () => {
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
    score += scoreFrench();

    // 1 point for any other defender on the board (including the cellar)
    score += scoreNonFrench();

    // subtract 1 point for each SS counter on the board
    score -= scoreAxis();
    
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