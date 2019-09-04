import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepotsComponent } from './listedepots.component';

describe('ListedepotsComponent', () => {
  let component: ListedepotsComponent;
  let fixture: ComponentFixture<ListedepotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedepotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
