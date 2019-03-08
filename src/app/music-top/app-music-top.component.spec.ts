import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMusicTopComponent } from './app-music-top.component';

describe('AppMusicSlideComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppMusicTopComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMusicTopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppMusicTopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppMusicTopComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });
});
