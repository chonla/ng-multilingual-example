# Angular Multilingual Example

This project is to show a simple way to handle multilingual in Angular application. I personally prefer an easy way to accomplish the task.

## Translation Table

Just add new translations to ```src/app/i18n/langs``` directory and import it to ```src/app/i18n/translations.ts```. See ```src/app/i18n/langs/en-US.ts``` for example.

## Usage

#### As Pipe

```
{{ 'hello_world' | translate }}
```

#### As Service

```
constructor(private translator: TranslatorService) {}

translate() {
  const result = this.translator.translate('hello_world');
}
```

## Service Methods

*setLanguage(id: string)*

To set language. Parameter id is defined as in ```src/app/i18n/translations.ts```.

*getLanguage()*

To get current language.

*translate(text: string)*

To translate the given text. If not found in translation table, text is returned.

## Alternatives

You may be interested in other options of doing multilingual. AFAIK, here is the list of those.

* [@ngx-translate](https://www.npmjs.com/package/@ngx-translate/core)
* [Simple Language Translation in Angular 2](https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1)
