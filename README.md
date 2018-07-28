Github Api Demo
===============

Fetch data from github with [github-api](https://www.npmjs.com/package/github-api)

First to make sure you can visit github api from your computer(it's blocked in some countries), by running command:

```
curl https://api.github.com
```

Setup
-----


Create a file `github-token.js` to contain your github token to run this demo, with following content:

```
module.exports = "<your-token>"
```

And make sure you won't include it to git, or share to others.

Install dependencies:

```
npm install
```

Run
---

Run following commands to try different functions:

```
npx babel-node --presets node6 src/repos.js
npx babel-node --presets node6 src/gists.js
npx babel-node --presets node6 src/stars.js
npx babel-node --presets node6 src/orgs.js
```

Resources
---------

- <https://github.com/github-tools/github>
- <http://github-tools.github.io/github/docs/3.1.0/>
