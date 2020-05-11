import { Component, OnInit } from '@angular/core';
import {Message} from '../../common/message';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];
  detailsUrl: string;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getAll().subscribe(data => this.messages = data);
  }
}
