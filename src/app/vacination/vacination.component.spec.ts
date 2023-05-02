import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinationComponent } from './vacination.component';

describe('VacinationComponent', () => {
  let component: VacinationComponent;
  let fixture: ComponentFixture<VacinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
