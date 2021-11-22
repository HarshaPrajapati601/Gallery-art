import React from 'react';
import { connect } from 'react-redux';
import { selectArt } from '../actions';

const ArtList = (props) =>{

    const renderArtList = () => {

        return(
            props.artList.map((eachItem, index) => {
                return (
                    <div className="item" key={index}>
                        <div className="right floated content">
                            <button
                             className="ui button primary"
                             onClick={()=> props.selectArtAction(eachItem)}>
                                Select
                            </button>
                        </div>
                        <div className="content">
                            {eachItem.title}
                        </div>
                    </div>
                );
            })
        )
    }
    //this.props === this.state
    console.log(props);
    return (
        <div className="ui divided list">
           {renderArtList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return{
        artList: state.artsList
    }

}
//This is saying that we're going to take our state's object, essentially all of the data that's inside
// of our reduc store and we're going to run some calculation on it or some computation that's going to
// cause that data to eventually show up as props inside of our component.


export default connect(mapStateToProps, {selectArtAction: selectArt})(ArtList); 
//the connect function takews the action creator as 2nd parameter and pass it into our component as prop
// function connect() {
//     return function() {
//       return "HI there"
//     }
//   }
  
//   connect()()
  
