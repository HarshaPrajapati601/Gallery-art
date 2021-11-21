import React from 'react';

const Header = () => {

    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 50, alignItems: 'center',
        margin: 10}}>
            <div>
                Logo Arts
            </div>
            <div>
                Art Gallery
            </div>
            <div>
                Details
            </div>
        </div>
    )
}

export default Header;