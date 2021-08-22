import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatAllUsersComponent } from './gat-all-users.component';

describe('GatAllUsersComponent', () => {
  let component: GatAllUsersComponent;
  let fixture: ComponentFixture<GatAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
