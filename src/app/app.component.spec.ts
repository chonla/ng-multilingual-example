import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslatorService } from './services/translator/translator.service';
import { TranslatePipe } from './pipes/translate.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TranslatePipe
      ],
      providers: [TranslatorService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
