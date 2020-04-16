import React from 'react';

function selectReducer(state, action) {
    switch (action.type) {
        case 'select':
            return { select: true, id: action.data }
        default:
            return state
    }
}

export default selectReducer;