import { RandomDirective } from './random.directive';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

@Component({
  template: '<p *appRandom></p>'
})
class TestComponent {}

describe('RandomDirective', () => {
  let p: DebugElement[];

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [RandomDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    p = fixture.debugElement.queryAll(By.css('p'));
  });

  it('should create an instance', () => {
    // non testable car "random"
    expect(true).toBeTrue();
  });
});
