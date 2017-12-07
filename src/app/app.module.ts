import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslatorService } from './services/translator/translator.service';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ts: TranslatorService) {
    ts.setLanguage('en');
  }
}
