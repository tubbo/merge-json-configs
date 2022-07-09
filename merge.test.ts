import { mergeJsonConfigs } from './merge'
import { jsonc } from 'jsonc'

interface TSConfig {
  compilerOptions: {
    target: string
    baseUrl: string
  }
  exclude: string[]
}

const ORIGINAL_FILE = '__mocks__/original.json'
const OVERRIDES_FILE = '__mocks__/overrides.json'

test('mergeJsonConfigs', async () => {
  const original = await jsonc.read(ORIGINAL_FILE)
  const overrides = await jsonc.read(OVERRIDES_FILE)
  const merged = mergeJsonConfigs<TSConfig>(ORIGINAL_FILE, OVERRIDES_FILE)

  expect(merged.compilerOptions.target).toEqual(original.compilerOptions.target)
  expect(merged.compilerOptions.baseUrl).toEqual(
    overrides.compilerOptions.baseUrl
  )
  expect(merged).toMatchSnapshot()
})
