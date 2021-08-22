import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBaceComponent } from './token-bace.component';

describe('TokenBaceComponent', () => {
  let component: TokenBaceComponent;
  let fixture: ComponentFixture<TokenBaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenBaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenBaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
