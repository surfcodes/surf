const childProcess = require('child_process');

// SURF OVERRIDE
// const VERSION = require('@codesandbox/common/lib/version').default;
const VERSION = 'surf-override.0.0.0'

console.log('Marking this release as deployed in Sentry');
try {
  childProcess.execSync(
    `yarn run sentry-cli releases --org=codesandbox deploys ${VERSION} new -e PROD`
  );
} catch (e) {
  console.error(e);
}
