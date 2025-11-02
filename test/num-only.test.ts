import { expect, test } from 'bun:test';

import numOnly from '../src';

test('Arg "Testing with string" returns empty', () => {
  const result = numOnly('Testing with string');

  expect(result).toBe('');
});

test('Arg "testing123" returns "123"', () => {
  const result = numOnly('testing123');

  expect(result).toBe('123');
});

test('Arg "123.456.789-10" returns "12345678910"', () => {
  const result = numOnly('123.456.789-10');

  expect(result).toBe('12345678910');
});

test('Arg ["a", 1, "2"] returns "12"', () => {
  const result = numOnly(['a', 1, '2']);

  expect(result).toBe('12');
});

test('Arg Infinity returns empty', () => {
  const result = numOnly(Infinity);

  expect(result).toBe('');
});

test('Arg undefined returns empty', () => {
  const result = numOnly(undefined);

  expect(result).toBe('');
});

test('Arg null returns empty', () => {
  const result = numOnly(null);

  expect(result).toBe('');
});

test('Arg { a: 1, b: 2 } returns empty', () => {
  const result = numOnly({ a: 1, b: 2 });

  expect(result).toBe('');
});

test('Arg { toString: () => 123 } returns "123"', () => {
  const result = numOnly({ toString: () => 123 });

  expect(result).toBe('123');
});

test('Arg Date returns empty', () => {
  const result = numOnly(Date);

  expect(result).toBe('');
});

test('Arg Error returns empty', () => {
  const result = numOnly(Error);

  expect(result).toBe('');
});

test('Arg () => "abc123" returns "123"', () => {
  const result = numOnly(() => 'abc123');

  expect(result).toBe('123');
});
