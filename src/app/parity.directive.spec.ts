import { ParityDirective } from './parity.directive';
import {TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: '<p [appParity]="1"></p><p [appParity]="2"></p>'
})
class TestComponent {}

describe('ParityDirective', () => {
  let p: DebugElement[];

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ParityDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    p = fixture.debugElement.queryAll(By.css('p'));
  });

  it('should add "odd" class to first paragraph', () => {
    expect(p[0].nativeElement.classList.contains('odd')).toBeTruthy();
  });
});
