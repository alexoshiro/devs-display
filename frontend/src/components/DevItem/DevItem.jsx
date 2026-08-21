import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';

function DevItem({ dev, removeItemAction }) {
  const navigate = useNavigate();

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name || dev.github_username} />
        <div className="user-info">
          <strong>{dev.name || dev.github_username}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
        <div className="actions">
          <EditIcon fontSize="small" onClick={() => navigate(`/editar/${dev.github_username}`)} style={{ cursor: 'pointer' }} />
          <DeleteIcon fontSize="small" className="delete-icon" onClick={() => removeItemAction(dev.github_username)} style={{ cursor: 'pointer' }} />
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
    </li>
  );
}

export default DevItem;
