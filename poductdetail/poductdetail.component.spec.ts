import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductdetailComponent } from './poductdetail.component';

describe('PoductdetailComponent', () => {
  let component: PoductdetailComponent;
  let fixture: ComponentFixture<PoductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
