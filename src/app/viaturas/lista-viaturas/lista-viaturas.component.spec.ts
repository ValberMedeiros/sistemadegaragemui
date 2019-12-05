import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViaturasComponent } from './lista-viaturas.component';

describe('ListaViaturasComponent', () => {
  let component: ListaViaturasComponent;
  let fixture: ComponentFixture<ListaViaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaViaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaViaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
