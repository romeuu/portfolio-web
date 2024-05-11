import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCardComponent } from './tech-card.component';

describe('TechCardComponent', () => {
  let component: TechCardComponent;
  let fixture: ComponentFixture<TechCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
