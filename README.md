# merge-json-configs

Library and CLI for merging multiple JSON configuration files together.

## Features

- Strips comments out from JSONC documents like `tsconfig.json`
- Deep merging includes arrays and nested objects
- Supports an unlimited number of files to merge with the last file
  gaining precedence in overrides.

## Usage

Run on the command line:

```bash
yarn dlx merge-json-configs file1.json file2.json
```

Or, install it as a library:

```bash
yarn add merge-json-configs
```

The `mergeJsonConfigs()` and `readJsonFile()` functions are exported
from the default module:

```typescript
import { mergeJsonConfigs } from 'merge-json-configs'

mergeJsonConfigs('file1.json', 'file2.json')
```

You can also mimic the CLI's functionality by importing `runCLI()` from
the `cli` module:

```typescript
import { runCLI } from 'merge-json-configs/cli'

runCLI(['file1.json', 'file2.json'])
```

## Development

This project uses Yarn Zero-Installs, so you shouldn't need to install
any dependencies. Running `yarn run` will show you all of the commands
that you have access to while developing on the project.

When you commit code, various lint tools are run on the changed files
that you are committing, like `eslint`, `prettier`, and `commitlint`. We
use conventional commits so that features and fixes will be
automatically surfaced in the changelog.

New versions are published automatically from `main` and the other
release branches.
