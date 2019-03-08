import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMusicDiscoverComponent } from './app-music-slide.component';

describe('AppMusicSlideComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppMusicDiscoverComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMusicDiscoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppMusicDiscoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppMusicDiscoverComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });
});
