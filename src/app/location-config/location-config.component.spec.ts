import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationConfigComponent } from './location-config.component';

describe('LocationConfigComponent', () => {
  let component: LocationConfigComponent;
  let fixture: ComponentFixture<LocationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
