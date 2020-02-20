import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './dashboard.css';
import './sidebar.css';
import './main.css';

import DevItem from '../../components/DevItem';
import DevForm from '../../components/DevForm';

function Dashboard({ history }) {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handlerAddDev(data) {
    try {
      const response = await api.post('/devs', data);
      if (response && response.status === 200) {
        setDevs([...devs, response.data]);
      }
    } catch ({ response }) {
      if (response.data.error) {
        alert(response.data.messages.join("\n"));
      }
    }

  }

  return (
    <div id="dashboard">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handlerAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} history={history} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Dashboard;
