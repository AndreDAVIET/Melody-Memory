import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeReussiComponent } from './challenge-reussi.component';

describe('ChallengeReussiComponent', () => {
  let component: ChallengeReussiComponent;
  let fixture: ComponentFixture<ChallengeReussiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeReussiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeReussiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
