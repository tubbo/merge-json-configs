import deepMerge from 'deepmerge'
import { jsonc } from 'jsonc'

/**
 * Merge multiple JSON configuration files together, with either one of them
 * optionally including comments. All comments and whitespace will be
 * stripped out, leaving just the merged data. Conflicting keys in
 * earlier files will be rewritten by the data in later files.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeJsonConfigs<T = any>(...files: string[]) {
  return deepMerge.all<T>(
    files.map((file) => {
      try {
        return jsonc.readSync(file)
      } catch (_) {
        return {}
      }
    })
  )
}
