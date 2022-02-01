import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GameStart from './dialogs/GameStart';
import Credits   from './dialogs/Credits';
import Score     from './dialogs/Score';

import { DialogContainer } from '@adobe/react-spectrum';

const DialogManager = () => {
    const { displayDialog } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const onDismiss = () => {
        dispatch({ type: 'CLOSE_DIALOG' });
    };

    return (
        <DialogContainer onDismiss={onDismiss}>
            {displayDialog === 'gameStart' && <GameStart />}
            {displayDialog === 'credits' && <Credits />}
            {displayDialog === 'score' && <Score />}
        </DialogContainer>
    )
};

export default DialogManager;
