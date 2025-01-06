import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRouteComponent } from './second-route.component';

describe('SecondRouteComponent', () => {
  let component: SecondRouteComponent;
  let fixture: ComponentFixture<SecondRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
