import store from '../../store';

const tracks = store.getState().map.tracks;

const advance = (trackId, enemy) => {
    let track = trackId;
    let incoming = enemy;

    do {
        // get next track, counter (if any) from current track
        const { next, counter } = tracks[track];

        // place incoming counter on current track
        tracks[track].counter = incoming;

        // prepare loop for next track, next incoming counter
        track = next;
        incoming = counter;

        // if there is still a counter to place but no more tracks, game over!
        if (track === null && incoming) {
            store.dispatch({ type: 'GAME_LOST' });
            console.log('You lose!');
            break;
        }

        // if no more incoming counters, exit
        if (incoming === null) break;
    } while (incoming)

    return false;
};

export default advance;
