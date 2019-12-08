import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarViaturasComponent } from './atualizar-viaturas.component';

describe('AtualizarViaturasComponent', () => {
  let component: AtualizarViaturasComponent;
  let fixture: ComponentFixture<AtualizarViaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarViaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarViaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
