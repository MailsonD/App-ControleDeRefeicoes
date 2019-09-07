import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJantaPage } from './view-janta.page';

describe('ViewJantaPage', () => {
  let component: ViewJantaPage;
  let fixture: ComponentFixture<ViewJantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJantaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
