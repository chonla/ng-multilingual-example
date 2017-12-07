import { Component, LOCALE_ID } from '@angular/core';
import { TranslatorService } from './services/translator/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private trans: TranslatorService) {}

  changeLocale(l: string): void {
    this.trans.setLanguage(l);
  }

  currentLocale(): string {
    return this.trans.getLanguage();
  }
}
