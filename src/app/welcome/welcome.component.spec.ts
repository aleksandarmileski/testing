import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement}from '@angular/core';
import {WelcomeComponent} from "./welcome.component";
import {UserService} from "../model/user.service";


describe('WelcomeComponent', () => {
  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let componentUserService: UserService;
  let userService: UserService;
  let de: DebugElement;
  let el: HTMLElement;

  let userServiceStub: {
    isLoggedIn: boolean;
    user: {name: string}
  };

  beforeEach(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: {name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub}
      ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;

    // UserService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);
    componentUserService = userService;

    // UserService from the root injector
    userService = TestBed.get(UserService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;

  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', 'Welcome...');
    expect(content).toContain('Test User', 'expected name');
  });

  it('should welcome "Pecko"', () => {
    userService.user.name = "Pecko";
    fixture.detectChanges();
    expect(el.textContent).toContain('Pecko');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });

  it('should inject the component\'s UserService instance',
    inject([UserService], (service: UserService) => {
      expect(service).toBe(componentUserService);
    }));

  it('TestBed and Component UserService should be the same', () => {
    expect(userService === componentUserService).toBe(true);
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);

    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });
});
