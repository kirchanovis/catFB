const initialState = [
        {
            id: 1,
            additive: 'с фуа-гра',
            portions: '10',
            auxportions: 'мышь в подарок',
            kg: '0,5',
            down: 'Чего сидишь? Порадуй котэ, купи.',
            buy: false,
            empty: false,
            hover: false
        },
        {
            id: 2,
            additive: 'с рыбой',
            portions: '40',
            auxportions: '2 мыши в подарок',
            kg: '2',
            buy: true,
            empty: false,
            hover: true
        },
        {
            id: 3,
            additive: 'с курой',
            portions: '100',
            auxportions: '5 мышей в подарок',
            kg: '5',
            buy: false,
            empty: true,
            hover: false
        },
    ]

export default function (state=initialState, action) {
    switch(action.type) {
        case 'CHOOSE_FEED':
            return state
        case 'OVER_FEED':
            return state;
        case 'OUT_FEED':
            // action.payload
            return state;
        default:
            return state
    }
};