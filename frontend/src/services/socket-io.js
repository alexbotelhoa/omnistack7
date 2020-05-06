import io from 'socket.io-client'

const socketIo = io('http://192.168.1.101:3333')

export default socketIo