import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isShownDetails = false;
  company= {
    name: 'ORSYS'
    , address: {
      lines: ['11 allée du Pacific', 'Zone Euratlantique', 'Quai 8.2']
      , zip: '33800'
      , city: 'Bordeaux'
    }
    , contact: 'Cyril BALL'
    , phone: '0102030406'
    , desc: 'WebStore, La boutique en ligne !'
  };

  constructor() { }

  ngOnInit() {
  }

  showDetails(){
    this.isShownDetails = true;
  }

}
