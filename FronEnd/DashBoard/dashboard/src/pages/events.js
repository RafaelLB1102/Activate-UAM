import React from 'react';
import EventsList from './Components/EventsListComponent';
import NavBar from './Components/NavBar';

const EventsPage = () => (
  <div>
    <NavBar/>
    <h1>Eventos</h1>
    <EventsList/>
  </div>
);

export default EventsPage;
