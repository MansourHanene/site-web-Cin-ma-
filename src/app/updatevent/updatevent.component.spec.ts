import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateventComponent } from './updatevent.component';

describe('UpdateventComponent', () => {
  let component: UpdateventComponent;
  let fixture: ComponentFixture<UpdateventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
