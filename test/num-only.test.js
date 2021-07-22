/* eslint-disable @typescript-eslint/no-var-requires, no-magic-numbers */
const numOnly = require('..')

test('Arg "Testing with string" returns empty', () => {
  expect(numOnly('Testing with string')).toBe('')
})

test('Arg "testing123" returns "123"', () => {
  expect(numOnly('testing123')).toBe('123')
})

test('Arg "123.456.789-10" returns "12345678910"', () => {
  expect(numOnly('123.456.789-10')).toBe('12345678910')
})

test('Arg ["a", 1, "2"] returns "12"', () => {
  expect(numOnly(['a', 1, '2'])).toBe('12')
})

test('Arg Infinity returns empty', () => {
  expect(numOnly(Infinity)).toBe('')
})

test('Arg undefined returns empty', () => {
  expect(numOnly(undefined)).toBe('')
})

test('Arg null returns empty', () => {
  expect(numOnly(null)).toBe('')
})

test('Arg { a: 1, b: 2 } returns empty', () => {
  expect(numOnly({ a: 1, b: 2 })).toBe('')
})

test('Arg { toString: () => 123 } returns "123"', () => {
  expect(numOnly({ toString: () => 123 })).toBe('123')
})

test('Arg Date returns empty', () => {
  expect(numOnly(Date)).toBe('')
})

test('Arg Error returns empty', () => {
  expect(numOnly(Error)).toBe('')
})

test('Arg () => "abc123" returns "123"', () => {
  expect(numOnly(() => 'abc123')).toBe('123')
})
