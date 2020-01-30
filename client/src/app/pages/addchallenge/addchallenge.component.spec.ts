import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchallengeComponent } from './addchallenge.component';

describe('AddchallengeComponent', () => {
  let component: AddchallengeComponent;
  let fixture: ComponentFixture<AddchallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
