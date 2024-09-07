import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttComponenteComponent } from './att-componente.component';

describe('AttComponenteComponent', () => {
  let component: AttComponenteComponent;
  let fixture: ComponentFixture<AttComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
