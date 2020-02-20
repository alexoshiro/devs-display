import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './dashboard.css';
import './sidebar.css';
import './main.css';

import DevItem from '../../components/DevItem';
import DevForm from '../../components/DevForm';

function Dashboard() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handlerAddDev(data) {
    const response = await api.post('/devs',data);

    setDevs([...devs, response.data]);
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
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Dashboard;
