import socketio from 'socket.io-client';
import { API_URL } from 'react-native-dotenv';

const socket = socketio(API_URL || 'http://10.0.2.2:3333', {
  autoConnect: false,
  transports: ['websocket']
});

function subscribeToNewDevs(subscribeFunction) {
  socket.off('new-dev');
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.auth = {
    latitude,
    longitude,
    techs
  };
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
};