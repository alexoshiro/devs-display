import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import DevForm from '../../components/DevForm';

import './styles.css';

function DevEdit({ history, match }) {
  const { username } = match.params;
  const [dev, setDev] = useState();

  useEffect(() => {

    api.get(`/devs/${username}`)
      .then(response => {
        if (response && response.status === 200) {
          setDev(response.data);
        }
      }).catch(({ response }) => {

      });
  }, [username]);

  async function handlerUpdateDev(data) {
    try {
      delete data.github_username;
      const response = await api.put(`/devs/${username}`, data);
      if (response && response.status === 200) {
        redirectToHome();
      }
    } catch ({ response }) {
      if (response.data.error) {
        alert(response.data.messages.join("\n"));
        redirectToHome();
      }
    }
  }

  function redirectToHome() {
    history.push("/");
  }

  return (
    <div className="container">
      {dev ? <img src={dev.avatar_url} alt={dev.name} /> : <div className="header">Editar</div>}
      <div>
        <DevForm onSubmit={handlerUpdateDev} dev={dev} usernameDisabled={true} cancelButtonAction={redirectToHome} />
      </div>
    </div>
  );
}

export default DevEdit;
