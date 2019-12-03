import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMotoristasComponent } from './cadastro-motoristas.component';

describe('CadastroMotoristasComponent', () => {
  let component: CadastroMotoristasComponent;
  let fixture: ComponentFixture<CadastroMotoristasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMotoristasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
