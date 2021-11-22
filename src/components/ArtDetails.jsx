import React from 'react';
import { connect } from 'react-redux';

const ArtDetails = ({selectedArt}) =>{
    if(!selectedArt) {
        return <div> Select an Art</div>
    }
    return (
        <div>
            <h3> Details for: </h3>
            <p>
              Title: {selectedArt.title}
              <br/>
              Description: {selectedArt.description}
              </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedArt: state.selectedArt }
}

export default connect(mapStateToProps)(ArtDetails);