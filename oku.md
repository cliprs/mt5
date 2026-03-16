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

      added 685 packages, and audited 686 packages in 5s

      152 packages are looking for funding
        run `npm fund` for details

      17 vulnerabilities (4 moderate, 13 high)

      To address issues that do not require attention, run:
        npm audit fix

      To address all issues (including breaking changes), run:
        npm audit fix --force

      Run `npm audit` for details.

  - Done (5.7s)
- Running scripts
  - Running `[0;33m[1;36mnpm run build[0m`


      > mt5-web@0.0.3 build
      > tsc && vite build

      vite v4.5.14 building for production...
      transforming...
      ✓ 26 modules transformed.
      [vite-plugin-pwa:build] Transform failed with 1 error:
      /workspace/src/data/accounts.ts:1:0: ERROR: Unexpected "�"
      file: /workspace/src/data/accounts.ts:1:0

      Unexpected "�"
      1  |  ��i