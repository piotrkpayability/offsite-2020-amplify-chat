import { Component, OnInit } from '@angular/core';
import {Message} from './message/message.interface';
import {LoginService} from '../login/login.service';
import {APIService, OnCreateMessagesSubscription} from '../../API.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[];
  newMessage: string;
  loggedUser: string;
  constructor(
    private loginService: LoginService,
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.loginService.userName$.subscribe(
      userName => this.loggedUser = userName
    );

    this.api.ListMessagess().then(
      ({items}) => {
        this.messages = items
          .sort((a, b) => a.createdAt <= b.createdAt ? -1 : 1)
          .map(item => ({
            id: item.id,
            text: item.text,
            user: item.userName,
            createdAt: new Date(item.createdAt),
          }));
       }
    );
    this.api.OnCreateMessagesListener.subscribe(result => {
      const value = (result as any).value.data.onCreateMessages;
      this.messages.push({
            id: value.id,
            text: value.text,
            user: value.userName,
            createdAt: new Date(value.createdAt),
          });
    });
  }

  trackById(index, message?: Message): string {
    return message.id;
  }

  async send(message: string): Promise<void>{
    await this.api.CreateMessages({
      text: message,
      userName: this.loggedUser,
    });
    this.newMessage = '';
  }


}
