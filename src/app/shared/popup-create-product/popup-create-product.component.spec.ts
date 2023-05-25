import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateProductComponent } from './popup-create-product.component';

describe('PopupCreateProductComponent', () => {
  let component: PopupCreateProductComponent;
  let fixture: ComponentFixture<PopupCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
