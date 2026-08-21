import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

import DevForm from '../../components/DevForm';
import './styles.css';

function DevEdit() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [dev, setDev] = useState(null);

  useEffect(() => {
    if (username) {
      api.get(`/devs/${username}`)
        .then(response => {
          if (response && response.status === 200) {
            setDev(response.data);
          }
        })
        .catch(err => {
          console.error('Erro ao buscar dados do dev:', err);
        });
    }
  }, [username]);

  async function handlerUpdateDev(data) {
    try {
      const updateData = { ...data };
      delete updateData.github_username;

      const response = await api.put(`/devs/${username}`, updateData);
      if (response && response.status === 200) {
        redirectToHome();
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.messages.join('\n'));
      } else {
        alert('Erro ao atualizar desenvolvedor.');
      }
      redirectToHome();
    }
  }

  function redirectToHome() {
    navigate('/');
  }

  return (
    <div className="container">
      {dev ? <img src={dev.avatar_url} alt={dev.name || dev.github_username} /> : <div className="header">Editar</div>}
      <div>
        <DevForm
          onSubmit={handlerUpdateDev}
          dev={dev}
          usernameDisabled={true}
          cancelButtonAction={redirectToHome}
        />
      </div>
    </div>
  );
}

export default DevEdit;
