import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwrasComponent } from './starwras.component';

describe('StarwrasComponent', () => {
  let component: StarwrasComponent;
  let fixture: ComponentFixture<StarwrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
