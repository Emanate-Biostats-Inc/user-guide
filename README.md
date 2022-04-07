## Setup

1. Create GitHub account https://github.com/
2. Download GitHub desktop https://desktop.github.com/
3. Install VS code https://code.visualstudio.com/
4. Install git https://git-scm.com/download/win
5. Install node https://nodejs.org/en/download/

`C:\Users\Jonathan Amato\Documents\Emanate Biostats User Guide`

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

```powershell
npm run build

cmd /C "set GIT_USER=jcamato-work&& npm run deploy"
```
