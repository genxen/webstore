import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../products/category';

@Component({
  selector: 'app-cat-submenu',
  templateUrl: './cat-submenu.component.html',
  styleUrls: ['./cat-submenu.component.css']
})
export class CatSubmenuComponent implements OnInit {

	@Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
