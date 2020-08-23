import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream1Component } from './stream1.component';

describe('Stream1Component', () => {
  let component: Stream1Component;
  let fixture: ComponentFixture<Stream1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stream1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stream1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
