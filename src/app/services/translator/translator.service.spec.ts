import { TestBed, async, inject } from '@angular/core/testing';

import { TranslatorService } from './translator.service';
import { Observable } from 'rxjs/Observable';

describe('TranslatorService', () => {
  let service: TranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatorService]
    });
    service = TestBed.get(TranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return as it is when no translation resource found', () => {
    const result = service.translate('hello');
    expect(result).toEqual('hello');
  });

  it('should return as it is when no translation key found', () => {
    service.setTranslation({
      'en': {
        'hi': 'HELLO WORLD!'
      }
    });
    const result = service.translate('hello');
    expect(result).toEqual('hello');
  });

  it('should set default language to en', () => {
    expect(service.getLanguage()).toEqual('en');
  });

  it('should return as it is defined in translation resource when no language id is explicitly defined', () => {
    service.setTranslation({
      'en': {
        'hello': 'HELLO WORLD!'
      },
      'th': {
        'hello': 'สวัสดี'
      }
    });
    const result = service.translate('hello');
    expect(result).toEqual('HELLO WORLD!');
  });

  it('should return as it is defined in translation resource when language id is explicitly defined', () => {
    service.setTranslation({
      'en': {
        'hello': 'HELLO WORLD!'
      },
      'th': {
        'hello': 'สวัสดี'
      }
    });
    service.setLanguage('th');
    const result = service.translate('hello');
    expect(result).toEqual('สวัสดี');
  });
});
