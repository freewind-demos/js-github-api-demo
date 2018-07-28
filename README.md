Github Api Demo
===============

Fetch data from github with [github-api](https://www.npmjs.com/package/github-api)

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

Notice
------

Some of the github-api urls are blocked or unstable in some countries. If you can't get response in reasonable time, try run the code through proxies.

Resources
---------

- <https://github.com/github-tools/github>
- <http://github-tools.github.io/github/docs/3.1.0/>
