import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMotoristasComponent } from './lista-motoristas.component';

describe('ListaMotoristasComponent', () => {
  let component: ListaMotoristasComponent;
  let fixture: ComponentFixture<ListaMotoristasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMotoristasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
