import React from 'react'
import WebinarForm from './Components/WebinarFormComponent';
import NavBar from './Components/NavBar';

const createWebinar = () => {
    return (
        <div>
            <NavBar />
            <h1>Creación de Webinars</h1>
            <WebinarForm />
        </div>
    )
}

export default createWebinar
