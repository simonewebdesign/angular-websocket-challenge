import {expect} from 'chai';
import Foo from '../src/foo';

describe('Foo', () => {

  let foo;

  beforeEach(() => foo = new Foo());

  describe('foo()', () => {
    it('returns "bar"', () => {
      expect(foo.foo()).to.equal('bar');
    });
  });
})
