import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelinfoPage } from './hotelinfo.page';

describe('HotelinfoPage', () => {
  let component: HotelinfoPage;
  let fixture: ComponentFixture<HotelinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotelinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
