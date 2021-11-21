import React from 'react';
import { selectArt } from '../actions'; //named export
import ArtList from './ArtList';

const Main = () => {

    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column twelve wide">
                    <ArtList />
                </div>
            </div>
        </div>
    )
}

export default Main;