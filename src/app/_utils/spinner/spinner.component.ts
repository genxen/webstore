import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() message: string = 'Chargement en cours...';
  @Input() title?: string;
  @Input() titleClass?: string;

  constructor() { }

  ngOnInit() {
  }

}
