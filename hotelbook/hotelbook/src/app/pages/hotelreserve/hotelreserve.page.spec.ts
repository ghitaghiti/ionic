import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelreservePage } from './hotelreserve.page';

describe('HotelreservePage', () => {
  let component: HotelreservePage;
  let fixture: ComponentFixture<HotelreservePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotelreservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
