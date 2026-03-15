koyeb/build-command-nodejs 0.1.0
heroku/nodejs-engine       3.6.5
heroku/nodejs-npm-install  3.6.5
Timer: Detector ran for 139.78179ms and ended at 2026-03-15T21:00:02Z
Timer: Restorer started at 2026-03-15T21:00:03Z
Restoring metadata for "heroku/nodejs-engine:dist" from app image
Restoring metadata for "heroku/nodejs-engine:web_env" from app image
Restoring metadata for "heroku/nodejs-npm-install:npm_runtime_config" from app image
Restoring metadata for "heroku/nodejs-npm-install:npm_cache" from cache
Restoring data for "heroku/nodejs-engine:dist" from cache
Restoring data for "heroku/nodejs-npm-install:npm_cache" from cache
Timer: Restorer ran for 3.526172852s and ended at 2026-03-15T21:00:06Z
Timer: Builder started at 2026-03-15T21:00:08Z
[INFO] Found custom build command: 'npm install && npm run build'

[1;35m## Heroku Node.js Engine[0m

- Checking Node.js version
  - Node.js version not specified, using `[0;33m22.x[0m`
  - Resolved Node.js version: `[0;33m22.15.1[0m`
- Installing Node.js distribution
  - Reusing Node.js 22.15.1 (linux-amd64)
- Done (finished in < 0.1s)

[1;35m## Heroku Node.js npm Install[0m

- Installing node modules
  - Using npm version `[0;33m10.9.2[0m`
  - Restoring npm cache
  - Configuring npm cache directory
  - Running `[0;33m[1;36mnpm ci "--production=false"[0m`

      npm warn config production Use `--omit=dev` instead.
      npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
      npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
      npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
      npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
      npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
      npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
      npm warn deprecated source-map@0.8.0-beta.0: The work that was done in this beta branch won't be included in future versions
      npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

      added 685 packages, and audited 686 packages in 42s

      152 packages are looking for funding
        run `npm fund` for details

      17 vulnerabilities (4 moderate, 13 high)

      To address issues that do not require attention, run:
        npm audit fix

      To address all issues (including breaking changes), run:
        npm audit fix --force

      Run `npm audit` for details.

  - Done (42.0s)
- Running scripts
  - Running `[0;33m[1;36mnpm run build[0m`


      > mt5-web@0.0.3 build
      > tsc && vite build

      src/components/AccountManager.tsx(3,29): error TS2724: '"react-icons/io5"' has no exported member named 'IoUploadOutline'. Did you mean 'IoPlayOutline'?
      src/components/AccountManager.tsx(14,7): error TS6133: 'sanitizeDigits' is declared but its value is never read.
      src/components/AccountManager.tsx(58,5): error TS6133: 'removeEntry' is declared but its value is never read.
      src/components/AccountManager.tsx(65,10): error TS6133: 'closeTimeTouched' is declared but its value is never read.
      src/components/AccountManager.tsx(74,10): error TS6133: 'ticketToDelete' is declared but its value is never read.

  - Done (1.6s)

- [1;36mDebug Info:[0m
  - Command failed `npm run build`
    exit status: 2
    stdout: <see above>
    stderr: <see above>

[0;31m! Failed to execute build script[0m
[0;31m![0m
[0;31m! The Heroku Node.js npm Install buildpack allows customization of the build process by executing the following scripts if they are defined in `[0;33mpackage.json[0m[0;31m`:[0m
[0;31m! - `[0;33mheroku-prebuild[0m[0;31m` [0m
[0;31m! - `[0;33mheroku-build[0m[0;31m` or `[0;33mbuild[0m[0;31m` [0m
[0;31m! - `[0;33mheroku-postbuild[0m[0;31m`[0m
[0;31m![0m
[0;31m! An unexpected error occurred while executing `[0;33mnpm run build[0m[0;31m`. See the log output above for more information.[0m
[0;31m![0m
[0;31m! Suggestions:[0m
[0;31m! - Ensure that this command runs locally without error.[0m
[0;31m![0m
[0;31m! Use the debug information above to troubleshoot and retry your build.[0m
[0;31m![0m
[0;31m! If the issue persists and you think you found a bug in the buildpack, reproduce the issue locally with a minimal example. Open an issue in the buildpack's GitHub repository and include the details here:[0m
[0;31m! [1;4;36mhttps://github.com/heroku/buildpacks-nodejs/issues[0m


Timer: Builder ran for 44.004173937s and ended at 2026-03-15T21:00:52Z
[31;1mERROR: [0mfailed to build: exit status 1
Build failed ❌