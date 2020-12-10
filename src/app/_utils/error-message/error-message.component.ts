import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input() title: string = 'Erreur';
  @Input() message: string = 'Il y a eu une erreur';

  constructor() { }

  ngOnInit() {
  }

}
