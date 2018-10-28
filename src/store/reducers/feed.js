import { findIndex } from 'lodash'

const initialState = [
  {
    id: 1,
    additive: 'с фуа-гра',
    portions: '10',
    auxportions: 'мышь в подарок',
    kg: '0,5',
    down: 'Чего сидишь? Порадуй котэ, купи.',
    desc: 'Печень утки разварная с артишоками.',
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
    desc: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    buy: false,
    empty: false,
    hover: false
  },
  {
    id: 3,
    additive: 'с курой',
    portions: '100',
    auxportions: '5 мышей в подарок',
    kg: '5',
    desc: 'Филе из цыплят с трюфелями в бульоне.',
    buy: false,
    empty: true,
    hover: false
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHOOSE_FEED':
      const index = findIndex(state, ['id', action.payload])
      if (!state[index].empty) {
        state.splice(index, 1, { ...state[index], buy: !state[index].buy, hover: false })
      }
      return [...state]
    case 'OVER_FEED':
      const indexOver = findIndex(state, ['id', action.payload])
      state.splice(indexOver, 1, { ...state[indexOver], hover: true })
      return [...state]
    case 'UPDATE_DESCRIPTION':
      const { id, value } = action.payload
      const indexUpdate = findIndex(state, ['id', id])
      state.splice(indexUpdate, 1, { ...state[indexUpdate], desc: value })
      return [...state]
    case 'OUT_FEED':
      const indexOut = findIndex(state, ['id', action.payload])
      state.splice(indexOut, 1, { ...state[indexOut], hover: false })
      return [...state]
    default:
      return state
  }
};
