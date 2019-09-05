import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicaPage } from './view-publica.page';

describe('ViewPublicaPage', () => {
  let component: ViewPublicaPage;
  let fixture: ComponentFixture<ViewPublicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPublicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPublicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
