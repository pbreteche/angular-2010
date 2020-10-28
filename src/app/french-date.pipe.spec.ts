import { FrenchDatePipe } from './french-date.pipe';

describe('FrenchDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FrenchDatePipe();
    expect(pipe).toBeTruthy();
  });
});
