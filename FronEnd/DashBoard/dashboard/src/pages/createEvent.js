import React from 'react';
import EventForm from './Components/EventFormComponent';
import NavBar from './Components/NavBar';

const EventsPage = () => (
  <div>
    <NavBar/>
    <h1>Creación de eventos</h1>
    <EventForm/>
  </div>
);

export default EventsPage;
