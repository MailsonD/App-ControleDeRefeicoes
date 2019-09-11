import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaGestorPage } from './estatistica-gestor.page';

describe('EstatisticaGestorPage', () => {
  let component: EstatisticaGestorPage;
  let fixture: ComponentFixture<EstatisticaGestorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticaGestorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaGestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
