import { Injectable } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { urls } from '../helpers/urls.const';
import { User } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  webSocket!: WebSocket;
  users: User[] = [];

  constructor(private userService: UserService) { }

  public openWebSocket(){
    this.webSocket = new WebSocket(urls.ws.connect);

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.users.push(chatMessageDto);
      let user = this.userService.userFriends.find(q=>q.name === chatMessageDto.name);
      if(user!==undefined){
        user.status = chatMessageDto.status;
      }
      console.log(':--> ', chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(users: User){
    this.webSocket.send(JSON.stringify(users));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
