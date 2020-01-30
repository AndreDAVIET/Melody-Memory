import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOKComponent } from './inscription-ok.component';

describe('InscriptionOKComponent', () => {
  let component: InscriptionOKComponent;
  let fixture: ComponentFixture<InscriptionOKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionOKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
