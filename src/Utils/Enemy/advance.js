import store from '../../store';

const tracks = store.getState().map.tracks;

const advance = (trackId, enemy) => {
    let track = trackId;
    let incoming = enemy;

    do {
        // in current tile, get next node, counter
        const { next, counter } = tracks[track];
        console.log(track);
        console.log('Next', next);
        console.log('Counter', counter);
        
        // assign incoming enemy to this track
        tracks[track].counter = incoming;

        // update next track, assign incoming counter
        track = next;
        incoming = counter;

        // if no more counters to assign, end
        if (incoming === null) {
            (console.log('break'));
            break;
        }
    } while (incoming !== null)

    return false;
};

export default advance;
