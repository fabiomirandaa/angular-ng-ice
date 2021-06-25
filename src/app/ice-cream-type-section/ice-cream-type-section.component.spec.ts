import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamTypeSectionComponent } from './ice-cream-type-section.component';

describe('IceCreamTypeSectionComponent', () => {
  let component: IceCreamTypeSectionComponent;
  let fixture: ComponentFixture<IceCreamTypeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamTypeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamTypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
