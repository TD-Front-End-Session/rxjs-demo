import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatStreamComponent } from './concat-stream.component';

describe('ConcatStreamComponent', () => {
  let component: ConcatStreamComponent;
  let fixture: ComponentFixture<ConcatStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
