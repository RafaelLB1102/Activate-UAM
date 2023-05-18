import React from 'react'
import WebinarForm from './Components/WebinarFormComponent';
import NavBar from './Components/NavBar';

const createWebinar = () => {
    return (
        <div>
            <NavBar title='Creación de Webinars' active='webinars' />
            <h1 style={{ margin: '20px 0',  textAlign: 'center' }}>Creación de Webinars</h1>
            <WebinarForm />
        </div>
    )
}

export default createWebinar
