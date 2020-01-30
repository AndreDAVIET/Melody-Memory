import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletechallengeComponent } from './deletechallenge.component';

describe('DeletechallengeComponent', () => {
  let component: DeletechallengeComponent;
  let fixture: ComponentFixture<DeletechallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletechallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletechallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
