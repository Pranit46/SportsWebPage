import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecOneComponent } from './sec-one.component';

describe('SecOneComponent', () => {
  let component: SecOneComponent;
  let fixture: ComponentFixture<SecOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
