import { AutoRc } from 'auto'

import { INpmConfig } from '@auto-it/npm'
import { IAllContributorsPluginOptions } from '@auto-it/all-contributors'
import { IOmitCommitsPluginOptions } from '@auto-it/omit-commits'

const npmOptions: INpmConfig = {
  exact: true,
  canaryScope: '@canary',
}

const allContributorsOptions: IAllContributorsPluginOptions = {
  types: {
    plugin: '**/plugin/**/*',
    code: ['**/src/**/*', '**/package.json', '**/tsconfig.json'],
  },
}

const omitCommitsOptions: IOmitCommitsPluginOptions = {
  subject: ['chore', 'update'],
  labels: 'skip-release',
}

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    baseBranch: 'master',
    prereleaseBranches: ['develop'],
    author: 'Burak Cakmakoglu<78412429+bcakmakoglu@users.noreply.github.com>',

    next: {
      message: 'Install beta version: `yarn add @braks/vue-flow@next`',
    },
    canary: {
      target: 'pr-body',
      message: 'Install PR version: `yarn add @braks/vue-flow@%v`',
    },

    plugins: [
      ['npm', npmOptions],
      ['released', { message: '%TYPE went out with version: %VERSION' }],
      ['conventional-commits', { defaultReleaseType: 'patch' }],
      ['omit-commits', omitCommitsOptions],
      ['all-contributors', allContributorsOptions],
    ],
  }
}
