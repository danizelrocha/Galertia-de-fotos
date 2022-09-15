import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkiraComponent } from './akira.component';

describe('AkiraComponent', () => {
  let component: AkiraComponent;
  let fixture: ComponentFixture<AkiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
