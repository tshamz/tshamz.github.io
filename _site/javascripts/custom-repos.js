// Opt-in repos (case sensitive)
// - These are all children of BVAccel and visible at https://github.com/bvaccel
var optInRepos = [
  'jamesbrown',
  'css',
  'javascript'
]

// Add custom repos by full_name. Take the org/user and repo name
var customRepos = [
  'tshamz/wtfdrink',
  'tshamz/time-is-a-flat-circle',
  'tshamz/a11y-mooc',
  'tshamz/code-standards',
  'tshamz/qa-checklist',
  'tshamz/the-gauntlet',
  'tshamz/andersoncooper',
  'tshamz/brianwilliams',
  'tshamz/asana-bug-reporter-extension',
  'tshamz/asana-comment-filler-inner',
  'tshamz/wtfdrink',
  'tshamz/tylershambora.com',
  'tshamz/socket-to-me-baby',
  'tshamz/free-marketplace-music',
  'tshamz/gulp-shopify-upload-with-callbacks',
  'tshamz/shopify-frankenstein',
  'tshamz/angular-grade-calculator',
  'tshamz/ad-hoc-product-exporter',
  'tshamz/postcss-shopify-settings-variables',
  'tshamz/up-down-left-right'
]

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  'a11y-mooc': 'JavaScript',
  'shopify-frankenstein': 'JavaScript',
  'socket-to-me-baby': 'JavaScript',
}

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {
  'asana-bug-reporter-extension': '/images/repo-avatars/chrome-extensions.png',
  'asana-comment-filler-inner': '/images/repo-avatars/chrome-extensions.png',
  'wtfdrink': '/images/repo-avatars/wtfdrink.png',
  'tylershambora.com': '/images/repo-avatars/tylershambora.com.png',
  'socket-to-me-baby': '/images/repo-avatars/socket-to-me-baby.png'
}
