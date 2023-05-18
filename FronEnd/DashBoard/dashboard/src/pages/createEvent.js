import React from 'react';
import EventForm from './Components/EventFormComponent';
import NavBar from './Components/NavBar';

const EventsPage = () => (
  <div>
    <NavBar title='Creación de eventos' active='eventos' />
    <h1 style={{ margin: '20px 0',  textAlign: 'center' }}>Creación de eventos</h1>
    <EventForm/>
  </div>
);

export default EventsPage;
