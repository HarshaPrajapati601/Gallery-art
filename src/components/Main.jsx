import React from 'react';
import ArtDetails from './ArtDetails';
import ArtList from './ArtList';

const Main = () => {

    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <ArtList />
                </div>
                <div className="column eight wide">
                    <ArtDetails />
                </div>
            </div>
        </div>
    )
}

export default Main;