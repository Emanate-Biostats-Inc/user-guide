## Setup

1. Create GitHub account https://github.com/
2. Download GitHub desktop https://desktop.github.com/
3. Install VS code https://code.visualstudio.com/
4. Install git https://git-scm.com/download/win
5. Install node https://nodejs.org/en/download/
6. In VS Code open `C:\Users\Jonathan Amato\Documents\Emanate Biostats User Guide`
7. In VS Code Terminal Powershell

## Creation

```powershell
npx create-docusaurus@latest user-guide classic --typescript

cd user-guide

git init .
```

## Test Changes

```powershell
npm start
```

## Deploy Changes

https://docusaurus.io/docs/deployment#deploying-to-github-pages

```powershell
npm run build

cmd /C "set GIT_USER=jcamato-work&& npm run deploy"
```
