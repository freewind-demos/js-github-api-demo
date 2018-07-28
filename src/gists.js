import token from '../github-token.js'
import Github from 'github-api';

const gh = new Github({
    token: token
});

const user = gh.getUser('freewind');

user.listGists()
    .then(function ({data: gists}) {
        console.log('--- gists ---');
        console.log(gists);
    });
