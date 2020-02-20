import React, { useState, useEffect, useRef } from 'react';

import './styles.css'

function DevForm({ onSubmit, dev, usernameDisabled = false, cancelButtonAction }) {
    const isMounted = useRef(true);
    const [loading, setLoading] = useState(false);
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        if (dev) {
            setGithubUsername(dev.github_username);
            setTechs(dev.techs.join(", "));
            setLatitude(dev.location.coordinates[1]);
            setLongitude(dev.location.coordinates[0]);
        }
        return () => {
            isMounted.current = false;
        }
    }, [dev]);

    function myLocation() {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
                setLoading(false);
            },
            (err) => {
                alert(err.message);
                setLoading(false);
            },
            {
                timeout: 30000
            }
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });
        if (isMounted.current) {
            setLoading(false);
            clearFields();
        }
    }

    function clearFields() {
        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)} disabled={usernameDisabled} />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>
            <div className="input-block">
                <button type="button" onClick={myLocation} disabled={loading}>{loading ? "Aguarde..." : "Minha localização"}</button>
            </div>

            <button type="Submit" disabled={loading}>{loading ? "Aguarde..." : dev ? "Editar" : "Salvar"}</button>
            <button type="button" className="cancel-button" disabled={loading} onClick={cancelButtonAction} hidden={!cancelButtonAction}>{loading ? "Aguarde..." : "Cancelar"}</button>
        </form>
    );
}

export default DevForm;