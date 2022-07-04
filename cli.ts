import { mergeJsonConfigs } from './merge.js'

export function runCLI(argv: string[]) {
  console.log(JSON.stringify(mergeJsonConfigs(...argv), null, 2))
}

runCLI(process.argv)
