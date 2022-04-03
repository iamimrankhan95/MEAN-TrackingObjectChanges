import WebSocket, { WebSocketServer } from 'ws';
import http, { Server } from "http";
import Publisher from '../publishers/publisher';

export class WebSocketManager {

    // private publisher: Publisher = Publisher.getInstance();
    private static webSocketManager: WebSocketManager;
    private webSocketServer!: WebSocketServer;
    server!: http.Server;
    path!: string;
    clients: Set<WebSocket.WebSocket> = new Set<WebSocket.WebSocket>();

    private constructor() {

    }

    static getManagerInstance() {
        if (!this.webSocketManager) {
            this.webSocketManager = new WebSocketManager();
            return this.webSocketManager;
        }

        return this.webSocketManager;
    }

    establishSocket(server: http.Server, path: string) {
        this.server = server; this.path = path;
        this.createSocketServer(server, path);
        this.initWebSocketEvent();
    }

    initWebSocketEvent() {
        this.webSocketServer.on('connection', (ws) => {
            console.log('welcome new client');
            this.clients.add(ws);
        });
    }

    getSocketServer() {
        return this.webSocketServer;
    }

    createSocketServer(server: http.Server, path: string) {
        console.log("socket created in path: " + path);
        return this.webSocketServer = new WebSocketServer({
            server: server,
            path: path,
        });

    }

    // publishExcludingItself(sender: WebSocket, data: string | null, isBinary: boolean) {
    //     console.log('this.websocketServer.clients.length:--> ', this.webSocketServer.clients.size);
    //     this.webSocketServer.clients.forEach(function each(client) {
    //         if (client.readyState === WebSocket.OPEN) {
    //             client.send(data, { binary: isBinary });
    //         }
    //     });
    // }

    // publishToItself(sender: WebSocket, data: string | null, isBinary: boolean) {
    //     console.log('this.websocketServer.clients.length:--> ', this.webSocketServer.clients.size);
    //     this.webSocketServer.clients.forEach(function each(client) {
    //         if (client.readyState === WebSocket.OPEN) {
    //             client.send(data, { binary: isBinary });
    //         }
    //     });
    // }

    broadcastToEveryone(data: string | null, isBinary: boolean) {
        this.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    }
}

export default WebSocketManager