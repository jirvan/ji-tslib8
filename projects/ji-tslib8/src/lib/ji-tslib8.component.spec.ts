import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiTslib8Component } from './ji-tslib8.component';

describe('JiTslib8Component', () => {
  let component: JiTslib8Component;
  let fixture: ComponentFixture<JiTslib8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiTslib8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiTslib8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
