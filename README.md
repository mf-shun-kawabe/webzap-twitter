## Folder Structure

```
/
├───.gitignore
├───docker-compose.yaml
├───README.md
├───.git/...
├───api/
├───backend/
│   ├───.gitignore
│   └───apps/
│       └───nest/
│           ├───.prettierrc
│           ├───Dockerfile
│           ├───eslint.config.mjs
│           ├───nest-cli.json
│           ├───package.json
│           ├───README.md
│           ├───tsconfig.build.json
│           ├───tsconfig.json
│           ├───yarn.lock
│           ├───src/
│           │   ├───app.controller.spec.ts
│           │   ├───app.controller.ts
│           │   ├───app.module.ts
│           │   ├───app.service.ts
│           │   └───main.ts
│           └───test/
│               ├───app.e2e-spec.ts
│               └───jest-e2e.json
├───db/
├───frontend/
│   ├───.gitignore
│   └───apps/
│       └───next/
│           ├───.yarnrc.yml
│           ├───Dockerfile
│           ├───eslint.config.mjs
│           ├───hello.txt
│           ├───next-env.d.ts
│           ├───next.config.ts
│           ├───package-lock.json
│           ├───package.json
│           ├───postcss.config.mjs
│           ├───README.md
│           ├───tsconfig.json
│           ├───yarn.lock
│           ├───app/
│           │   ├───favicon.ico
│           │   ├───globals.css
│           │   ├───layout.tsx
│           │   ├───page.tsx
│           │   └───api/
│           │       └───health/
│           │           └───route.ts
│           └───public/
│               ├───file.svg
│               ├───globe.svg
│               ├───next.svg
│               ├───vercel.svg
│               └───window.svg
└───web/
```
