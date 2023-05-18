import React from 'react';
import EventsList from './Components/EventsListComponent';
import NavBar from './Components/NavBar';

const EventsPage = () => (
  <div>
    <NavBar title='Eventos' active='eventos' />
    <h1 style={{ textAlign: 'center', marginTop: '25px'}} >Eventos</h1>
    <EventsList/>
  </div>
);

export default EventsPage;
