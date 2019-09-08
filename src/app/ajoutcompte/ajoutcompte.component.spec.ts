import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcompteComponent } from './ajoutcompte.component';

describe('AjoutcompteComponent', () => {
  let component: AjoutcompteComponent;
  let fixture: ComponentFixture<AjoutcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
