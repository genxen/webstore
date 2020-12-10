import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSubmenuComponent } from './cat-submenu.component';

describe('CatSubmenuComponent', () => {
  let component: CatSubmenuComponent;
  let fixture: ComponentFixture<CatSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
