import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandmanComponent } from './sandman.component';

describe('SandmanComponent', () => {
  let component: SandmanComponent;
  let fixture: ComponentFixture<SandmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
