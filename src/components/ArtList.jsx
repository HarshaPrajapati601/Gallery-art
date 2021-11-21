import React from 'react';
import { connect } from 'react-redux';

const ArtList = (props) =>{

    const renderArtList = () => {
        return(
            props.artList.map((eachItem, index) => {
                return (
                    <div className="item" key={index}>
                        <div className="right floated content">
                            <button className="ui button primary">
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
    return{
        artList: state.artsList
    }

}
//This is saying that we're going to take our state's object, essentially all of the data that's inside
// of our reduc store and we're going to run some calculation on it or some computation that's going to
// cause that data to eventually show up as props inside of our component.


export default connect(mapStateToProps)(ArtList); 
// function connect() {
//     return function() {
//       return "HI there"
//     }
//   }
  
//   connect()()
  
