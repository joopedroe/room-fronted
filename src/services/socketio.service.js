import Ws from '@adonisjs/websocket-client';

class SocketioService {
  socket;

  chat;

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  async setupSocketConnection() {
    this.socket = await Ws('ws://localhost:3322', {
      path: 'adonis-ws'
    });
    console.log(this.socket);
    this.socket.connect();
    console.log(this.socket);
    this.chat = this.socket.subscribe('chat');
    this.chat.on('class', data => {
      console.log(data);
    });
  }

  loginRoom(codeRoom, user) {
    this.chat.emit('room', { code: codeRoom, user: user });
  }

}

export default new SocketioService();
