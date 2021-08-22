import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatUserComponent } from './gat-user.component';

describe('GatUserComponent', () => {
  let component: GatUserComponent;
  let fixture: ComponentFixture<GatUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
