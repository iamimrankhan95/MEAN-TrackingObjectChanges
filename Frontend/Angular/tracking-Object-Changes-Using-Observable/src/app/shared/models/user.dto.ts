export interface User {
  name: string;
  status: Status;
}

export interface Status {
  name: string;
  color: string;
}
export interface WebSocketMsg {
  message: User;
  type: string;
}
