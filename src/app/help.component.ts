import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  template: `
    <div class="helps">
      <a class="help btn btn-success" href="https://angular.io/docs">Doc Angular</a>
      <a class="help btn btn-success" href="https://angular.io/tutorial">Tour of heroes</a>
      <a class="help btn btn-danger" href="https://www.pluralsight.com/codeschool?utm_term=&aid=7010a000002LQuiAAG&promo=&oid=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=EMEA_NB_Generic_BMM&utm_content=&gclid=EAIaIQobChMIqa7nvKWF5wIVCYbVCh3rZQHkEAAYASAAEgKgwfD_BwE">Code school</a>
    </div>
  `,
  styles: [
    '.helps{border:0.08rem solid #eec;margin:1rem;padding:1rem;text-align: center;}'
    ,'.help{box-shadow:1rem 1rem 1rem #666;margin:2rem;padding: 0.5rem;}']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
