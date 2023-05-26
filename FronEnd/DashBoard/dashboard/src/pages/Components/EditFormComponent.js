import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/EventForm.module.css';
import { uploadImage } from '@/utils/firebase';

const EditForm = ({ editingEvent, setIsEditing, onClose }) => {
    const [eventData, setEventData] = useState(editingEvent);
    const [image, setImage] = useState(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const url = await uploadImage(file);
        setEventData({ ...eventData, image_url: url });
        setImage(url);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('Cambiando:', name, value); // Agrega esta línea para depurar
        setEventData({ ...eventData, [name]: value });
        console.log(eventData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put('http://localhost:9000/api/v1/events/' + eventData._id, eventData);
            alert('Evento editado exitosamente');
            setEventData({
                name: '',
                place: '',
                event_date: '',
                start_time: '',
                end_time: '',
                category: '',
                status: '',
                image_url: '',
            });
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };


    return (

        <form className={styles['form-container']} onSubmit={handleSubmit}>
            <div className={styles['form-row']}>
                <div className={styles['form-column']}>
                    <div className={styles['form-group']}>
                        <label htmlFor="name" className={styles['form-label']}>
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={eventData.name}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="place" className={styles['form-label']}>
                            Lugar
                        </label>
                        <input
                            type="text"
                            id="place"
                            name="place"
                            value={eventData.place}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="event_date" className={styles['form-label']}>
                            Fecha del evento
                        </label>
                        <input
                            type="date"
                            id="event_date"
                            name="event_date"
                            value={eventData.event_date}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="start_time" className={styles['form-label']}>
                            Hora de inicio
                        </label>
                        <input
                            type="time"
                            id="start_time"
                            name="start_time"
                            value={eventData.start_time}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                </div>
                <div className={styles['form-column']}>
                    <div className={styles['form-group']}>
                        <label htmlFor="end_time" className={styles['form-label']}>
                            Hora de finalización
                        </label>
                        <input
                            type="time"
                            id="end_time"
                            name="end_time"
                            value={eventData.end_time}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="category" className={styles['form-label']}>
                            Categoría
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={eventData.category}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="Arte">Arte</option>
                            <option value="Cultura">Cultura</option>
                            <option value="Deporte">Deporte</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="status" className={styles['form-label']}>
                            Estado
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={eventData.status}
                            onChange={handleChange}
                            className={styles['form-input']}
                            required
                        >
                            <option value="">Selecciona un estado</option>
                            <option value="Activo">Activo</option>
                            <option value="Eliminado">Eliminado</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="image_url" className={styles['form-label']}>
                            Imagen
                        </label>
                        <input
                            type="file"
                            id="image_url"
                            name="image_url"
                            accept="image/*"
                            onChange={handleFileChange}
                            className={styles['form-input']}
                            required
                        />
                    </div>
                </div>
            </div>
            
            <div>
                <button type="submit" className={styles['submit-button']} href="./events" disabled={!image}>
                    Editar evento
                </button>
                <button type="submit" 
                    className={styles['cancel-button']} 
                    href="./events"
                    onClick={() => {
                        setIsEditing(false)
                    }}
                >
                    Cerrar
                </button>
            </div>

        </form>
    );
};

export default EditForm;

