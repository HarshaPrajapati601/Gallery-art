import { combineReducers } from 'redux';

//static list
const artsReducer = () => {
    return [
        {title: 'Water Paints', description: 'done using water paints'},
        {title: 'Sketches ', description: 'done using graphite pencils'},
        {title: 'Portraits Paints', description: 'done using water paints and charcoals'},
    ]
}

const selectedArtsReducer = (selectedArt= null, action) => {
    if(action.type === 'ART_SELECTED') {
        return action.payload;
    }
    return selectedArt
}

//the keys of this object are going to be the keys that show up inside of our state object.
 export default combineReducers({
    artsList: artsReducer,
    selectedArt: selectedArtsReducer
})
