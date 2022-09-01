require('dotenv').config();
const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  project: 'dev-portfolio',
  targets: {
    'chrome-1080p': new RemoteBrowserTarget('chrome', {
      viewport: '1920x1080',
      freezeAnimations: 'last-frame',
    }),
    'chrome-galaxy-s10': new RemoteBrowserTarget('chrome', {
      viewport: '360x740',
      freezeAnimations: 'last-frame',
    }),
    'safari-1080p': new RemoteBrowserTarget('safari', {
      viewport: '1920x1080',
      freezeAnimations: 'last-frame',
    }),
    'safari-iphone-12-pro': new RemoteBrowserTarget('safari', {
      viewport: '390x844',
      freezeAnimations: 'last-frame',
    }),
    'chrome-650': new RemoteBrowserTarget('chrome', {
      viewport: '650x415',
      freezeAnimations: 'last-frame',
    }),
  },
};
