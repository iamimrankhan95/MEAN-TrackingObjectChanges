import WebSocketManager from "../managers/websocket.manager";
import Publisher from "../publishers/publisher";

class UserStatusListener {
    static isSignIn: boolean;
    static userStatusListener: UserStatusListener;
    private webSocketManager: WebSocketManager = WebSocketManager.getManagerInstance();
    private publisher: Publisher = Publisher.getInstance();

    constructor() {
    }

    public static getHandlerInstance() {
        if (!this.userStatusListener) {
            this.userStatusListener = new UserStatusListener();
            return this.userStatusListener;
        }
        return this.userStatusListener;
    }

    notify(data: string | null, isBinary: boolean) {
        this.publisher.publishToEveryone(data,isBinary);
    }
}

export default UserStatusListener;