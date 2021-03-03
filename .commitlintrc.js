module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*)\((.*)\):\s(.*)\s-\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'module', 'subject']
    }
  },
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'chore',
      'revert'
    ]],
    'scope-enum': [2, 'always', [
      'assets',
      'models',
      'nav',
      'redux',
      'screens',
      'state',
      'domain',
      'app',
      'view',
      'infra',
      'services',
      'setup'
    ]],
  },
  ignores: [(commit) => (commit.slice(0, 3) === 'WIP')],
};
