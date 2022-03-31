import WebSocket, { WebSocketServer } from 'ws';
import http, {Server} from "http";

export class WebSocketManager {

    private static webSocketManager: WebSocketManager;
    private websocketServer!: WebSocketServer;
    server!: http.Server;
    path!: string;

    private constructor() {

    }

    static getSocketManagerInstance() {
        if (!this.webSocketManager) {
            this.webSocketManager = new WebSocketManager();
            return this.webSocketManager;
        }

        return this.webSocketManager;
    }

    connectToSocket(server: http.Server, path: string) {
        this.server = server;this.path = path;
        return this.createSocketServer(server,path).on('connection', function connection(ws) {
            console.log('welcome new client');
        });
    }

    getSocketServer() {
        return this.websocketServer;
    }

    createSocketServer(server: http.Server, path: string) {
        return this.websocketServer = new WebSocketServer({
            server: server,
            path: path,
          });

    }

    publish(data: string | null, isBinary: boolean) {
        console.log('this.websocketServer.clients.length:--> ', this.websocketServer.clients.size);
        this.websocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    }
}

export default WebSocketManager