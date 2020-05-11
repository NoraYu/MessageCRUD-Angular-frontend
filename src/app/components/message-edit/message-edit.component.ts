import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {Message} from '../../common/message';
import {MessageService} from '../../services/message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  messageFormGroup: FormGroup;
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
    if (messageId !== 0){
      this.messageService.get(messageId).subscribe(data => {this.message = data; }
      );
      this.href = `http://localhost:8080/messages/${messageId}`;
      this.notNew = true;
      console.log(`set up to be update. notNew is ${this.message.notNew}`); }
    else{
      this.notNew = false;
      console.log(`Create new. notNew is ${this.message.notNew}`); }
  }
  gotoList() {
    this.router.navigate(['/messages']);
  }
  save(form: NgForm){
    this.messageService.save(form).subscribe(() => this.gotoList());
  }

  remove(href){
    this.messageService.romove(href).subscribe(() => this.gotoList());
  }

  onSubmit() {
    console.log('Handling the submit button');
    }
}
