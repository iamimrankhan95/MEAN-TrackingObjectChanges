import WebSocket, { WebSocketServer } from 'ws';
import WebSocketManager from '../managers/websocket.manager';

class Publisher {
    static publisher: Publisher;
    private webSocketManager: WebSocketManager = WebSocketManager.getManagerInstance();

    constructor() {
    }

    public static getInstance() {
        if (!this.publisher) {
            this.publisher = new Publisher();
        }
        return this.publisher;
    }

    public getClients() {
        return this.webSocketManager.clients;
    }

    public addClient(client:WebSocket.WebSocket) {
        return this.webSocketManager.clients.add(client);
    }

    publishToEveryone(data: string | null, isBinary: boolean) {
        this.webSocketManager.broadcastToEveryone(data, isBinary);
    }
}

export default Publisher;