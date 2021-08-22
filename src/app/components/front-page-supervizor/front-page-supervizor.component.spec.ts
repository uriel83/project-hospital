import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSupervizorComponent } from './front-page-supervizor.component';

describe('FrontPageSupervizorComponent', () => {
  let component: FrontPageSupervizorComponent;
  let fixture: ComponentFixture<FrontPageSupervizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageSupervizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageSupervizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
