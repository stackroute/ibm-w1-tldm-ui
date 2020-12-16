import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanneldialogComponent } from './channeldialog.component';

describe('ChanneldialogComponent', () => {
  let component: ChanneldialogComponent;
  let fixture: ComponentFixture<ChanneldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanneldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanneldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
