import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarMotoristasComponent } from './atualizar-motoristas.component';

describe('AtualizarMotoristasComponent', () => {
  let component: AtualizarMotoristasComponent;
  let fixture: ComponentFixture<AtualizarMotoristasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarMotoristasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
