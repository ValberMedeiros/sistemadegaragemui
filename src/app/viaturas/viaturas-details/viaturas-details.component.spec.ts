import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaturasDetailsComponent } from './viaturas-details.component';

describe('ViaturasDetailsComponent', () => {
  let component: ViaturasDetailsComponent;
  let fixture: ComponentFixture<ViaturasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaturasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaturasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
