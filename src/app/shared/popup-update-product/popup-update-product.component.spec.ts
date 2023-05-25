import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateProductComponent } from './popup-update-product.component';

describe('PopupUpdateProductComponent', () => {
  let component: PopupUpdateProductComponent;
  let fixture: ComponentFixture<PopupUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
