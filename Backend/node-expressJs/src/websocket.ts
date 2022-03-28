import WebSocket, { WebSocketServer } from 'ws';
import http, { Server } from "http";
import { IUser } from './Models/User.model';

var websocketServer = new WebSocketServer({
    noServer: true,
    path: "/websockets",
  });


function connect(expressServer: http.Server) {
    websocketServer = new WebSocketServer({
        server: expressServer,
        path: "/websockets",
      });

    websocketServer.on('connection', function connection(ws) {
        console.log('welcome new client');
    });
}

function publish(data:string|null,isBinary:boolean) {
    websocketServer.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
        }
    });
}

export default {
    publish, connect
};
