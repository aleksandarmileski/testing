import {async, ComponentFixture, fakeAsync, tick, TestBed} from '@angular/core/testing';

import {TwainComponent} from './twain.component';
import {TwainService} from "../twain.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {observableToBeFn} from "rxjs/testing/TestScheduler";

describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let twainService: TwainService;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let el: HTMLElement;

  const testQuote = 'Test Quote';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwainComponent],
      providers: [TwainService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;

    // TwainService injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // setup spy on getQuote method
    spy = spyOn(twainService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));

    // get twain quote element by css selector
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should not show quote after component initialized', () => {
    fixture.detectChanges();

    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('...', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });

  it('should show quote after getQuote promise (async)', () => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {//wait for the async getQuote
      fixture.detectChanges();
      expect(el.textContent).toBe(testQuote);
    });
  });

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));


});
