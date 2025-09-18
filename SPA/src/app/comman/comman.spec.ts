import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comman } from './comman';

describe('Comman', () => {
  let component: Comman;
  let fixture: ComponentFixture<Comman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
