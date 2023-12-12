import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelcityPage } from './hotelcity.page';

describe('HotelcityPage', () => {
  let component: HotelcityPage;
  let fixture: ComponentFixture<HotelcityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotelcityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
