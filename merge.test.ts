import { mergeJsonConfigs, readJsonFile } from './merge'

interface TSConfig {
  compilerOptions: {
    target: string
    baseUrl: string
  }
  exclude: string[]
}

const ORIGINAL_FILE = '__mocks__/original.json'
const OVERRIDES_FILE = '__mocks__/overrides.json'

test('readJsonFile', () => {
  expect(() => readJsonFile(ORIGINAL_FILE)).toMatchSnapshot()
  expect(() => readJsonFile('bogus')).toThrowError(
    /ENOENT: no such file or directory/
  )
})

test('mergeJsonConfigs', () => {
  const original = readJsonFile(ORIGINAL_FILE)
  const overrides = readJsonFile(OVERRIDES_FILE)
  const merged = mergeJsonConfigs<TSConfig>(ORIGINAL_FILE, OVERRIDES_FILE)

  expect(merged.compilerOptions.target).toEqual(original.compilerOptions.target)
  expect(merged.compilerOptions.baseUrl).toEqual(
    overrides.compilerOptions.baseUrl
  )
  expect(merged.exclude).toMatchSnapshot()
})
