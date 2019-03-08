import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMusicSlideComponent } from './app-music-slide.component';

describe('AppMusicSlideComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppMusicSlideComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMusicSlideComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppMusicSlideComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppMusicSlideComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });
});
