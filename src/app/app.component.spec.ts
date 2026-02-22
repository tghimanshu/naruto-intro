import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the character initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.character).toBeDefined();
  });
  it('should have the character initialized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.character?.firstName).toBe('NARUTO');
  });

  it('should update the character on next'), () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.nextCharacter();

    expect(app.character!.firstName).toBe('SASUKE');
  }
  it('check the character changing'), () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.nextCharacter();
    expect(app.character?.firstName).toBe('SASUKE');
    app.nextCharacter();
    expect(app.character?.firstName).toBe('SAKURA');
    app.nextCharacter();
    expect(app.character?.firstName).toBe('KAKASHI');
    app.nextCharacter();
    expect(app.character?.firstName).toBe('NARUTO');
  }
});
