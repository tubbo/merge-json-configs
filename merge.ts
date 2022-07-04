import { readFileSync } from 'fs'
import stripComments from 'strip-json-comments'
import deepMerge from 'deepmerge'
import path from 'path'

/**
 * Merge multiple JSON configuration files together, with either one of them
 * optionally including comments. All comments and whitespace will be
 * stripped out, leaving just the merged data. Conflicting keys in
 * earlier files will be rewritten by the data in later files.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeJsonConfigs<T = any>(...files: string[]) {
  return deepMerge.all<T>(files.map(readJsonFile))
}

/**
 * Read a JSON file from disk and strip its comments, leaving only the
 * valid information that can be parsed and merged.
 */
export function readJsonFile(filename: string) {
  return JSON.parse(
    stripComments(readFileSync(path.resolve(filename), 'utf8')).replace(
      /,\s+$|^\n$/,
      ''
    )
  )
}
