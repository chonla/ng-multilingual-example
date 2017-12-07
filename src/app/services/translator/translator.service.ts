import { Injectable } from '@angular/core';
import * as translation from '../../i18n/translations';

@Injectable()
export class TranslatorService {
  private lang;
  private translation_table: any;

  private default_lang = 'en';

  constructor() {
    this.setTranslation(translation.default);
    this.setLanguage(this.default_lang);
  }

  setTranslation(t: any) {
    this.translation_table = t;
  }

  setLanguage(l: string) {
    this.lang = l;
  }

  getLanguage(): string {
    return this.lang;
  }

  translate(t: string): string {
    if (!this.translation_table.hasOwnProperty(this.lang)) {
      return t;
    }
    if (!this.translation_table[this.lang].hasOwnProperty(t)) {
      return t;
    }
    return this.translation_table[this.lang][t];
  }
}
