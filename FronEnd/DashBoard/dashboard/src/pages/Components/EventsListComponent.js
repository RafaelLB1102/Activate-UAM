import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/EventsList.module.css';
import EditForm from './EditFormComponent';
import { useSession, signIn, signOut } from "next-auth/react"

const EventsList = () => {

  const { data: session } = useSession({required:true})

  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/v1/events/all');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (eventId) => {
    console.log(eventId);
    try {
      await axios.delete(`http://localhost:9000/api/v1/events/${eventId}`);
      alert('Evento eliminado exitosamente');

    } catch (error) {
      console.error('Error eliminando evento:', error);
      alert('Error eliminando evento');
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event)
    setIsEditing(true);
  };



  return (
    <div className={styles.container}>
      {events.map((event) => (
        <div key={event._id} className={styles['event-card']}>
          <h2 className={styles['event-title']}>{event.name}</h2>
          <p className={styles['event-date-time']}>
            {new Date(event.event_date).toLocaleDateString()} - {event.start_time} - {event.end_time}
          </p>
          <p className={styles['event-place']}>Lugar: {event.place}</p>
          <p className={styles['event-category']}>Categoría: {event.category}</p>
          <p className={styles['event-place']}>Estado: {event.status}</p>
          <img src={event.image_url} width="100%" />
          <div>
            <button
              onClick={() => handleDelete(event._id)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => handleEdit(event)}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              Editar
            </button>

          </div>
        </div>
      ))}
      {isEditing && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <EditForm
            editingEvent={editingEvent}
            setIsEditing={setIsEditing}
          />
        </div>
      )}
    </div>
  );
};

export default EventsList;
