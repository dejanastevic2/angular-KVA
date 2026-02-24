import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalis } from './detalis';

describe('Detalis', () => {
  let component: Detalis;
  let fixture: ComponentFixture<Detalis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
