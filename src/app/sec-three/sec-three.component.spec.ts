import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecThreeComponent } from './sec-three.component';

describe('SecThreeComponent', () => {
  let component: SecThreeComponent;
  let fixture: ComponentFixture<SecThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
