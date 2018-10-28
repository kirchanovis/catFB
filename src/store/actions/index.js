const CHOOSE_FEED = 'CHOOSE_FEED'
const OVER_FEED = 'OVER_FEED'
const OUT_FEED = 'OUT_FEED'
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'

export const chooseFeed = (id) => {
  return {
    type: CHOOSE_FEED,
    payload: id
  }
}
export const updateDescription = (obj) => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: obj
  }
}
export const mouseOverFeed = (id) => {
  return {
    type: OVER_FEED,
    payload: id
  }
}
export const mouseoutFeed = (id) => {
  return {
    type: OUT_FEED,
    payload: id
  }
}
