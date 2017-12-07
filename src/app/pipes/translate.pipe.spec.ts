import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const service = jasmine.createSpyObj('TranslatorService', ['translate']);

    const pipe = new TranslatePipe(service);
    expect(pipe).toBeTruthy();
  });

  it('should translate the given text', () => {
    const service = jasmine.createSpyObj('TranslatorService', ['translate']);

    const pipe = new TranslatePipe(service);

    pipe.transform('hello');
    expect(service.translate).toHaveBeenCalledWith('hello');
  });
});
