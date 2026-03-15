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

> mt5-web@0.0.3 start
> node server.js

/workspace/node_modules/path-to-regexp/dist/index.js:96
            throw new PathError(`Missing parameter name at index ${index}`, str);
                  ^

PathError [TypeError]: Missing parameter name at index 3: (.*); visit https://git.new/pathToRegexpError for info
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
  originalPath: '(.*)'
}

Node.js v22.15.1
Instance is starting... Waiting for health checks to pass.