import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMoreInfoComponent } from './sign-more-info.component';

describe('SignMoreInfoComponent', () => {
  let component: SignMoreInfoComponent;
  let fixture: ComponentFixture<SignMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignMoreInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
