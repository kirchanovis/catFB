const CHOOSE_FEED = 'CHOOSE_FEED';
const OVER_FEED = 'OVER_FEED';
const OUT_FEED = 'OUT_FEED';

export const chooseFeed = (id) => {
    console.log('choose' + id)
    return {
        type: CHOOSE_FEED,
        payload: id
    }
}
export const mouseOverFeed = (id) => {
    console.log('over' + id)
    return {
        type: OVER_FEED,
        payload: id
    }
}
export const mouseoutFeed = (id) => {
    console.log('out' + id)
    return {
        type: OUT_FEED,
        payload: id
    }
}
