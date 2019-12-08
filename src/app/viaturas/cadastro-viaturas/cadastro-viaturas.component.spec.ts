import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroViaturasComponent } from './cadastro-viaturas.component';

describe('CadastroViaturasComponent', () => {
  let component: CadastroViaturasComponent;
  let fixture: ComponentFixture<CadastroViaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroViaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroViaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
