import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunjiitoComponent } from './junjiito.component';

describe('JunjiitoComponent', () => {
  let component: JunjiitoComponent;
  let fixture: ComponentFixture<JunjiitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunjiitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunjiitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
