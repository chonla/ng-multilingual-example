import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../services/translator/translator.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translator: TranslatorService) {}

  transform(value: string): string {
    return this.translator.translate(value);
  }

}
