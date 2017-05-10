import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentPromiseComponent } from './my-component-promise.component';

describe('MyComponentPromiseComponent', () => {
  let component: MyComponentPromiseComponent;
  let fixture: ComponentFixture<MyComponentPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
