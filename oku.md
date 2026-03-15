Build ready to start ▶️
>> Cloning github.com/cliprs/mt5.git commit sha f5c40187f3d64c67768ab9bc714424795820ffb8 into /builder/workspace
Initialized empty Git repository in /builder/workspace/.git/
From https://github.com/cliprs/mt5
 * branch            f5c40187f3d64c67768ab9bc714424795820ffb8 -> FETCH_HEAD
HEAD is now at f5c4018 fix: update express 5 catch-all route with regex to avoid PathError3
Starting Docker daemon...
Waiting for the Docker daemon to start...
done
Timer: Analyzer started at 2026-03-15T17:58:43Z
Restoring data for SBOM from previous image
Timer: Analyzer ran for 3.303748656s and ended at 2026-03-15T17:58:46Z
Timer: Detector started at 2026-03-15T17:58:47Z
======== Output: heroku/nodejs-corepack@3.6.5 ========

- [1;36mDebug Info:[0m
  - expected value at line 1 column 1

[0;31m! Error parsing `[0;33m./package.json[0m[0;31m`[0m
[0;31m![0m
[0;31m! The Heroku Node.js Corepack reads from `[0;33m./package.json[0m[0;31m` to complete the build but the file isn't valid JSON.[0m
[0;31m![0m
[0;31m! Suggestions:[0m
[0;31m! - Ensure the file follows the JSON format described at [1;4;36mhttps://www.json.org/[0m
[0;31m![0m
[0;31m! Use the debug information above to troubleshoot and retry your build.[0m


err:  heroku/nodejs-corepack@3.6.5 (1)
======== Output: heroku/nodejs-corepack@3.6.5 ========

- [1;36mDebug Info:[0m
  - expected value at line 1 column 1

[0;31m! Error parsing `[0;33m./package.json[0m[0;31m`[0m
[0;31m![0m
[0;31m! The Heroku Node.js Corepack reads from `[0;33m./package.json[0m[0;31m` to complete the build but the file isn't valid JSON.[0m
[0;31m![0m
[0;31m! Suggestions:[0m
[0;31m! - Ensure the file follows the JSON format described at [1;4;36mhttps://www.json.org/[0m
[0;31m![0m
[0;31m! Use the debug information above to troubleshoot and retry your build.[0m


err:  heroku/nodejs-corepack@3.6.5 (1)
======== Output: heroku/nodejs-corepack@3.6.5 ========

- [1;36mDebug Info:[0m
  - expected value at line 1 column 1

[0;31m! Error parsing `[0;33m./package.json[0m[0;31m`[0m
[0;31m![0m
[0;31m! The Heroku Node.js Corepack reads from `[0;33m./package.json[0m[0;31m` to complete the build but the file isn't valid JSON.[0m
[0;31m![0m
[0;31m! Suggestions:[0m
[0;31m! - Ensure the file follows the JSON format described at [1;4;36mhttps://www.json.org/[0m
[0;31m![0m
[0;31m! Use the debug information above to troubleshoot and retry your build.[0m


======== Output: heroku/nodejs-npm-engine@3.6.5 ========

- [1;36mDebug Info:[0m
  - expected value at line 1 column 1

[0;31m! Error parsing `[0;33m./package.json[0m[0;31m`[0m
[0;31m![0m
[0;31m! The Heroku Node.js npm Engine reads from `[0;33m./package.json[0m[0;31m` to complete the build but the file isn't valid JSON.[0m
[0;31m![0m
[0;31m! Suggestions:[0m
[0;31m! - Ensure the file follows the JSON format described at [1;4;36mhttps://www.json.org/[0m
[0;31m![0m
[0;31m! Use the debug information above to troubleshoot and retry your build.[0m


err:  heroku/nodejs-corepack@3.6.5 (1)
err:  heroku/nodejs-npm-engine@3.6.5 (1)
2 of 3 buildpacks participating
koyeb/build-command-nodejs 0.1.0
heroku/nodejs-engine       3.6.5
Timer: Detector ran for 112.536262ms and ended at 2026-03-15T17:58:47Z
Timer: Restorer started at 2026-03-15T17:58:47Z
Restoring metadata for "heroku/nodejs-engine:dist" from app image
Restoring metadata for "heroku/nodejs-engine:web_env" from app image
Restoring data for "heroku/nodejs-engine:dist" from cache


Instance created. Preparing to start...

added 71 packages, and audited 72 packages in 4s

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.11.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.1
npm notice To update run: npm install -g npm@11.11.1
22 packages are looking for funding
npm notice
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
/workspace/node_modules/path-to-regexp/dist/index.js:96
            throw new PathError(`Missing parameter name at index ${index}`, str);
                  ^

> mt5-web@0.0.3 start
> node server.js


PathError [TypeError]: Missing parameter name at index 9: /:path(.*); visit https://git.new/pathToRegexpError for info
    at name (/workspace/node_modules/path-to-regexp/dist/index.js:96:19)
    at parse (/workspace/node_modules/path-to-regexp/dist/index.js:113:68)
    at pathToRegexp (/workspace/node_modules/path-to-regexp/dist/index.js:267:58)
    at Object.match (/workspace/node_modules/path-to-regexp/dist/index.js:237:30)
    at matcher (/workspace/node_modules/router/lib/layer.js:86:23)
    at new Layer (/workspace/node_modules/router/lib/layer.js:93:62)
    at Function.route (/workspace/node_modules/router/index.js:428:17)
    at Function.route (/workspace/node_modules/express/lib/application.js:257:22)
    at app.<computed> [as get] (/workspace/node_modules/express/lib/application.js:478:22)
    at file:///workspace/server.js:8:5 {
  originalPath: '/:path(.*)'
}

Node.js v22.15.1
Instance is starting... Waiting for health checks to pass.
Application exited with code 1. This usually indicates an application failure. Check that the command used to launch your application is correct.

added 71 packages, and audited 72 packages in 3s

22 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
npm notice
npm notice New major version of npm available! 10.9.2 -> 11.11.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.1
npm notice To update run: npm install -g npm@11.11.1
npm notice

> mt5-web@0.0.3 start
> node server.js

/workspace/node_modules/path-to-regexp/dist/index.js:96
            throw new PathError(`Missing parameter name at index ${index}`, str);
                  ^

PathError [TypeError]: Missing parameter name at index 9: /:path(.*); visit https://git.new/pathToRegexpError for info
    at name (/workspace/node_modules/path-to-regexp/dist/index.js:96:19)
    at parse (/workspace/node_modules/path-to-regexp/dist/index.js:113:68)
    at pathToRegexp (/workspace/node_modules/path-to-regexp/dist/index.js:267:58)
    at Object.match (/workspace/node_modules/path-to-regexp/dist/index.js:237:30)
    at matcher (/workspace/node_modules/router/lib/layer.js:86:23)
    at new Layer (/workspace/node_modules/router/lib/layer.js:93:62)
    at Function.route (/workspace/node_modules/router/index.js:428:17)
    at Function.route (/workspace/node_modules/express/lib/application.js:257:22)
    at app.<computed> [as get] (/workspace/node_modules/express/lib/application.js:478:22)
    at file:///workspace/server.js:8:5 {
  originalPath: '/:path(.*)'
}

Node.js v22.15.1
Application exited with code 1. This usually indicates an application failure. Check that the command used to launch your application is correct.
Instance stopped.
Instance created. Preparing to start...
Instance is starting... Waiting for health checks to pass.

added 71 packages, and audited 72 packages in 2s

22 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

> mt5-web@0.0.3 start
> node server.js

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.11.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.1
npm notice To update run: npm install -g npm@11.11.1
npm notice
/workspace/node_modules/path-to-regexp/dist/index.js:96
            throw new PathError(`Missing parameter name at index ${index}`, str);
                  ^

PathError [TypeError]: Missing parameter name at index 9: /:path(.*); visit https://git.new/pathToRegexpError for info
    at name (/workspace/node_modules/path-to-regexp/dist/index.js:96:19)
    at parse (/workspace/node_modules/path-to-regexp/dist/index.js:113:68)
    at pathToRegexp (/workspace/node_modules/path-to-regexp/dist/index.js:267:58)
    at Object.match (/workspace/node_modules/path-to-regexp/dist/index.js:237:30)
    at matcher (/workspace/node_modules/router/lib/layer.js:86:23)
    at new Layer (/workspace/node_modules/router/lib/layer.js:93:62)
    at Function.route (/workspace/node_modules/router/index.js:428:17)
    at Function.route (/workspace/node_modules/express/lib/application.js:257:22)
    at app.<computed> [as get] (/workspace/node_modules/express/lib/application.js:478:22)
    at file:///workspace/server.js:8:5 {
  originalPath: '/:path(.*)'
}

Node.js v22.15.1