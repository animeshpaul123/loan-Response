import React from 'react';
import Toolbar from '../../Components/Naavigation/Toolbar/Toolbar';
const layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default layout;