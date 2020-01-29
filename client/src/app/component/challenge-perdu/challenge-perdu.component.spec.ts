import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengePerduComponent } from './challenge-perdu.component';

describe('ChallengePerduComponent', () => {
  let component: ChallengePerduComponent;
  let fixture: ComponentFixture<ChallengePerduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengePerduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengePerduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
