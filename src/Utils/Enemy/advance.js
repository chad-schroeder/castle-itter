import store from '../../store';

const tracks = store.getState().map.tracks;

const advance = (trackId, enemy) => {
    // const track = tracks.find(track => track.id === trackId);

    const payload = tracks.map(track => {
        if (track.id === trackId) {
            return {
                ...track,
                counter: enemy,
            };
        }
        return track;
    });
    
    console.log(payload);
    
    store.dispatch({ type: 'UPDATE_TRACKS', payload });
    
    return false;
};

export default advance;
