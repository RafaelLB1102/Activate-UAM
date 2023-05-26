// WebinarList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/WebinarList.module.css';
import EditWebinarForm from "./editWebinarComponent"

const WebinarList = () => {
    const [webinars, setWebinars] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingWebinar, setEditingWebinar] = useState(null);

    useEffect(() => {
        fetchWebinars();
    }, []);

    const fetchWebinars = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/v1/webminars/all');
            setWebinars(response.data);
        } catch (error) {
            console.error('Error fetching webinars:', error);
        }
    };

    const handleDelete = async (webminarId) => {
        try {
            await axios.delete(`http://localhost:9000/api/v1/webminars/${webminarId}`);
            alert('webinar eliminado exitosamente');
        } catch (error) {
            console.error('Error eliminando evento:', error);
            alert('Error eliminando Webinar');
        }
    };

    const handleEdit = (webinar) => {
        setEditingWebinar(webinar)
        setIsEditing(true);
    };

    return (
        <div>
            <h1 style={{ margin: '20px 0',  textAlign: 'center' }}>Webinars</h1>
            <div className={styles.container}>
                {webinars.map((webinar) => (
                    <div key={webinar._id} className={styles.webinarCard}>
                        <div className={styles['text-container']}>
                            <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>{webinar.name}</h2>
                            <p>Fecha de presentación: {new Date(webinar.presentation_date).toLocaleDateString()}</p>
                            <p>Hora de inicio: {webinar.start_time}</p>
                            <p>Estado: {webinar.status}</p>
                            <p>URL: {webinar.url}</p>
                            <div>
                                <h3>Ponentes</h3>
                                <ul>
                                    {webinar.speakers.map((speaker, index) => (
                                        <li key={index}>
                                            <p>Nombre: {speaker.name}</p>
                                            <p>Áreas de especialización:</p>
                                            <ul>
                                                {speaker.majors.map((major, majorIndex) => (
                                                    <li key={majorIndex}>{major}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles['button-container']}> 
                            <button
                                onClick={() => handleDelete(webinar._id)}
                                className={styles['delete-btn']}
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => handleEdit(webinar)}
                                className={styles['edit-btn']}
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
                        <EditWebinarForm
                            editingWebinar={editingWebinar}
                            setIsEditing={setIsEditing}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WebinarList;
