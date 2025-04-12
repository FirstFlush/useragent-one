export const apiParams = [
  {
    name: 'limit',
    type: 'number',
    note: '1–50',
    desc: 'Maximum number of user-agents to return. Defaults to 1.',
  },
  {
    name: 'deviceCategory',
    type: '"desktop" | "mobile" | "tablet"',
    desc: 'Filter by device type.',
  },
  {
    name: 'platform',
    type: 'string',
    desc: 'Exact value of `navigator.platform`.',
  },
  {
    name: 'vendor',
    type: 'string',
    desc: 'Exact value of `navigator.vendor`.',
  },
  {
    name: 'appName',
    type: 'string',
    desc: 'Exact value of `navigator.appName`.',
  },
  {
    name: 'language',
    type: 'string',
    desc: 'Exact value of `navigator.language`.',
  },
  {
    name: 'screenHeight',
    type: 'number',
    desc: 'Screen height in pixels.',
  },
  {
    name: 'screenWidth',
    type: 'number',
    desc: 'Screen width in pixels.',
  },
  {
    name: 'viewportHeight',
    type: 'number',
    desc: 'Viewport height in pixels.',
  },
  {
    name: 'viewportWidth',
    type: 'number',
    desc: 'Viewport width in pixels.',
  },
  {
    name: 'pluginsLength',
    type: 'number',
    desc: 'Length of `navigator.plugins` array.',
  },
];
