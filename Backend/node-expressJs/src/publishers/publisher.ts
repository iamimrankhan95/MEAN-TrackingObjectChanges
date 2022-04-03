import WebSocket, { WebSocketServer } from 'ws';
import WebSocketManager from '../managers/websocket.manager';

class Publisher {
    static publisher: Publisher;
    // private clients: Set<WebSocket.WebSocket> = new Set<WebSocket.WebSocket>();
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

    // public async signOutUser(name: string): Promise<IUser | null> {
    //     const signedOutUser = await UserRepo.getRepoInstance().updateUserStatus(name, StatusList.OFFLINE);
    //     return signedOutUser;
    // }
}

export default Publisher;