import React from 'react'
import NavBar from './Components/NavBar';
import WebinarList from './Components/WebinarListComponent';

const webminars = () => {
    return (
        <div>
            <NavBar active='webinars' />
            <WebinarList />
        </div>
    );
}

export default webminars
