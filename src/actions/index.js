//Action creator
export const selectArt = (song) => {
    //returns an action
    return {
        type: 'ART_SELECTED',
        payload: song
    }
}
