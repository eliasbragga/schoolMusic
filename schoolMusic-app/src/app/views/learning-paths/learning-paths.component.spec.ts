import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathsComponent } from './learning-paths.component';

describe('LearningPathsComponent', () => {
  let component: LearningPathsComponent;
  let fixture: ComponentFixture<LearningPathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningPathsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
