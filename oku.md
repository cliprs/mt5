Build ready to start ▶️
>> Cloning github.com/cliprs/mt5.git commit sha 6e2594055e26869e50449f920c5bb233ae185d3a into /builder/workspace
Initialized empty Git repository in /builder/workspace/.git/
From https://github.com/cliprs/mt5
 * branch            6e2594055e26869e50449f920c5bb233ae185d3a -> FETCH_HEAD
HEAD is now at 6e25940 yenibak
Starting Docker daemon...
Waiting for the Docker daemon to start...
...
done
Timer: Analyzer started at 2026-03-15T16:57:17Z
Restoring data for SBOM from previous image
Timer: Analyzer ran for 3.556386152s and ended at 2026-03-15T16:57:21Z
Timer: Detector started at 2026-03-15T16:57:21Z
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
Timer: Detector ran for 7.936848432s and ended at 2026-03-15T16:57:29Z
Timer: Restorer started at 2026-03-15T16:57:36Z
Restoring metadata for "heroku/nodejs-engine:dist" from app image
Restoring metadata for "heroku/nodejs-engine:web_env" from app image
Restoring data for "heroku/nodejs-engine:dist" from cache
Timer: Restorer ran for 3.368656563s and ended at 2026-03-15T16:57:39Z
Timer: Builder started at 2026-03-15T16:57:46Z
[INFO] Found custom build command: 'npm install && npm run build'

[1;35m## Heroku Node.js Engine[0m

- Checking Node.js version
  - Node.js version not specified, using `[0;33m22.x[0m`
  - Resolved Node.js version: `[0;33m22.15.1[0m`
- Installing Node.js distribution
  - Reusing Node.js 22.15.1 (linux-amd64)
- Done (finished in < 0.1s)
Timer: Builder ran for 118.687134ms and ended at 2026-03-15T16:57:47Z
Reusing layers from image 'registry01.prod.koyeb.com/k-580347a6-f27b-4163-b8b8-94b87d1bbfec/c346e62e-0ad1-4679-846d-9df7a6d7ee8e@sha256:8d409d229c7047b456c0ace5f5bd05220a07fe4e46ab28dad445ca541fb2e832'



Instance created. Preparing to start...
npm notice
npm notice New major version of npm available! 10.9.2 -> 11.11.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.1
npm notice To update run: npm install -g npm@11.11.1
npm notice

added 71 packages, and audited 72 packages in 2s

22 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
/workspace/node_modules/path-to-regexp/dist/index.js:96
            throw new PathError(`Missing parameter name at index ${index}`, str);
                  ^

PathError [TypeError]: Missing parameter name at index 2: /*; visit https://git.new/pathToRegexpError for info
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
  originalPath: '/*'
}

Node.js v22.15.1

> mt5-web@0.0.3 start
> node server.js

Instance is starting... Waiting for health checks to pass.
Application exited with code 1. This usually indicates an application failure. Check that the command used to launch your application is correct.




