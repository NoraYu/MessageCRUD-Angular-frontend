import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../common/message';
import {FormBuilder, NgForm} from '@angular/forms';
import {MessageService} from '../../services/message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  message: Message = new Message();
  notNew = false;
  href: string;


  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.handleMessageDetails());


    // this.messageFormGroup = this.formBuilder.group({
    //   postUser: this.formBuilder.group({
    //     name: [''],
    //   }),
    //   message: this.formBuilder.group({
    //     contents: ['']
    //   })
    // });
  }


  handleMessageDetails() {
    const messageId: number = + this.route.snapshot.paramMap.get('id');
    this.messageService.get(messageId).subscribe(data => {this.message = data; }
    );
    this.href = `http://localhost:8080/messages/${messageId}`;
    this.notNew = true;
    console.log(`set up to be update. notNew is ${this.message.notNew}`);
  }

}
