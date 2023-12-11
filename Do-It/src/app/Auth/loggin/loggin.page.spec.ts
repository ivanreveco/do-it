import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogginPage } from './loggin.page';

describe('LogginPage', () => {
  let component: LogginPage;
  let fixture: ComponentFixture<LogginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
