import { StringUtils } from './StringUtils'

test('escapeStringForShell small json', () => {
  expect(StringUtils.escapeStringForShell(JSON.stringify({ foo: 'bar', xyz: 123 }))).toEqual('"{\\"foo\\":\\"bar\\",\\"xyz\\":123}"')
})

test('escapeStringForShell simple String', () => {
  expect(StringUtils.escapeStringForShell('this is a test! "wooo"')).toEqual('"this is a test! \\"wooo\\""')
})

test('escapeStringForShell new line', () => {
  expect(StringUtils.escapeStringForShell('this\nnext-line')).toEqual('"this\nnext-line"')
})

test('suWrap simple test', () => {
  expect(StringUtils.suWrap('cd /etc')).toEqual('sudo bash -c "cd /etc"')
})

test('suWrap escape double quotes', () => {
  expect(StringUtils.suWrap('cd "/etc"')).toEqual('sudo bash -c "cd \\"/etc\\""')
})

test('suWrap single quotes unescaped', () => {
  expect(StringUtils.suWrap('cd \'/etc\'')).toEqual('sudo bash -c "cd \'/etc\'"')
})

test('suWrap escape backslash', () => {
  expect(StringUtils.suWrap('echo foo\\bar')).toEqual('sudo bash -c "echo foo\\\\bar"')
})
