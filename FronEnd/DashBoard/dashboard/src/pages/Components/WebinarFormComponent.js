import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinarform.module.css';

const WebinarForm = () => {
    const [webinarData, setWebinarData] = useState({
        name: '',
        presentation_date: '',
        start_time: '',
        status: '',
        url: '',
        speakers: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setWebinarData({ ...webinarData, [name]: value });
    };

    const handleSpeakersChange = (event, index) => {
        let majors
        const { name, value } = event.target;
        if(name == "majors"){
            majors = value.split(",")
            const updatedSpeakers = [...webinarData.speakers];
            updatedSpeakers[index] = { ...updatedSpeakers[index], [name]: majors };
            setWebinarData({ ...webinarData, speakers: updatedSpeakers });
        }else{
            const updatedSpeakers = [...webinarData.speakers];
            updatedSpeakers[index] = { ...updatedSpeakers[index], [name]: value };
            setWebinarData({ ...webinarData, speakers: updatedSpeakers });
        }
        
    };

    const addSpeaker = () => {
        setWebinarData({ ...webinarData, speakers: [...webinarData.speakers, { name: '', majors: '' }] });
    };

    const removeSpeaker = (index) => {
        const updatedSpeakers = [...webinarData.speakers];
        updatedSpeakers.splice(index, 1);
        setWebinarData({ ...webinarData, speakers: updatedSpeakers });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:9000/api/v1/webminars/webminar', webinarData);
            alert('Webinar creado con éxito');
        } catch (error) {
            console.error('Error al crear el webinar:', error);
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <label htmlFor="name" className={styles.label}>
                    Nombre:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={webinarData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="presentation_date" className={styles.label}>
                    Fecha de presentación:
                </label>
                <input
                    type="date"
                    id="presentation_date"
                    name="presentation_date"
                    value={webinarData.presentation_date}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="start_time" className={styles.label}>
                    Hora de inicio:
                </label>
                <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    value={webinarData.start_time}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="status" className={styles.label}>
                    Estado:
                </label>
                <select
                    id="status"
                    name="status"
                    value={webinarData.status}
                    onChange={handleChange}
                    required
                    className={styles.input}
                >
                    <option value="" disabled>
                        Seleccione un estado
                    </option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="url" className={styles.label}>
                    URL:
                </label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={webinarData.url}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>
            <div>
                <label className={styles.label}>Speakers:</label>
                {webinarData.speakers.map((speaker, index) => (
                    <div key={`speaker-${index}`} className={styles.formRow}>
                        <label htmlFor={`speaker-name-${index}`} className={styles.label}>
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id={`speaker-name-${index}`}
                            name="name"
                            value={speaker.name}
                            onChange={(event) => handleSpeakersChange(event, index)}
                            required
                            className={styles.input}
                        />
                        <label htmlFor={`speaker-majors-${index}`} className={styles.label}>
                            Especializaciones:
                        </label>
                        <input
                            type="text"
                            id={`speaker-majors-${index}`}
                            name="majors"
                            value={speaker.majors}
                            onChange={(event) => handleSpeakersChange(event, index)}
                            className={styles.input}
                        />
                        <button type="button" onClick={() => removeSpeaker(index)}>
                            Eliminar speaker
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addSpeaker}>
                    Añadir speaker
                </button>
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Crear Webinar
                </button>
            </div>
        </form>
    );
};

export default WebinarForm;
