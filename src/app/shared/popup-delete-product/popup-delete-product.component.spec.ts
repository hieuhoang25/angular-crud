import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteProductComponent } from './popup-delete-product.component';

describe('PopupDeleteProductComponent', () => {
  let component: PopupDeleteProductComponent;
  let fixture: ComponentFixture<PopupDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
