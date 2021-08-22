import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterImgComponent } from './enter-img.component';

describe('EnterImgComponent', () => {
  let component: EnterImgComponent;
  let fixture: ComponentFixture<EnterImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
