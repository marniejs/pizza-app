import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPlaceComponent } from './pizza-place.component';

describe('PizzaPlaceComponent', () => {
  let component: PizzaPlaceComponent;
  let fixture: ComponentFixture<PizzaPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaPlaceComponent]
    });
    fixture = TestBed.createComponent(PizzaPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
