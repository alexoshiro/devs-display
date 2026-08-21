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
      try {
        const response = await api.get('/devs');
        setDevs(response.data);
      } catch (err) {
        console.error('Erro ao carregar devs:', err);
      }
    }
    loadDevs();
  }, []);

  async function handlerAddDev(data) {
    try {
      const response = await api.post('/devs', data);
      if (response && (response.status === 200 || response.status === 201)) {
        setDevs(prevDevs => [...prevDevs, response.data]);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.messages.join('\n'));
      } else {
        alert('Erro ao cadastrar desenvolvedor.');
      }
    }
  }

  async function handlerDeleteDev(username) {
    try {
      const response = await api.delete(`/devs/${username}`);
      if (response && (response.status === 204 || response.status === 200)) {
        setDevs(prevDevs => prevDevs.filter(dev => dev.github_username !== username));
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.messages.join('\n'));
      } else {
        alert('Erro ao excluir desenvolvedor.');
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
            <DevItem key={dev._id || dev.github_username} dev={dev} removeItemAction={handlerDeleteDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Dashboard;
