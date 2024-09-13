import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSignDialogComponent } from './edit-sign-dialog.component';

describe('EditSignDialogComponent', () => {
  let component: EditSignDialogComponent;
  let fixture: ComponentFixture<EditSignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSignDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
