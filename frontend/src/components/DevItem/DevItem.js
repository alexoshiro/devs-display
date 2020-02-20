import React from 'react';
import './styles.css';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function DevItem({ history, dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <div className="actions">
                    <EditIcon fontSize="small" onClick={() => history.push(`/editar/${dev.github_username}`)}/>
                    <DeleteIcon fontSize="small" className="delete-icon" />
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar peril no Github</a>
        </li>
    );
}

export default DevItem;