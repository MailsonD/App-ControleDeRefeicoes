import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitacao2Page } from './solicitacao2.page';

describe('Solicitacao2Page', () => {
  let component: Solicitacao2Page;
  let fixture: ComponentFixture<Solicitacao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solicitacao2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solicitacao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
