import token from '../github-token.js'
import Github from 'github-api';

const gh = new Github({
    token: token
});

const user = gh.getUser('freewind');

user.listRepos()
    .then(function ({data: repos}) {
        console.log('--- repos ---');
        console.log(repos);
    });
