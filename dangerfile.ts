import { danger, fail, GitHubUser, message, warn } from 'danger';

const Symbols = {
    changed     : ':pencil:',
    construction: ':construction:',
    o           : ':o:',
    ok          : ':heavy_check_mark:',
    warning     : ':warning:',
    x           : ':heavy_multiplication_x:',
};

writeModifiedFiles();
checkAssignee();
checkWIPStatus();
checkReviewers();

function writeModifiedFiles() {
    const modifiedFiles = danger.git.modified_files.join('\n- ');
    message(`${Symbols.changed} Changed Files in this PR: \n- ` + modifiedFiles);
}

function checkAssignee() {
    if (!danger.github.pr.assignee) {
        fail(`${Symbols.x} This pull request needs an assignee!`);
    }
}

function checkWIPStatus() {
    danger.github.pr.title.includes('WIP') ?
        fail(`${Symbols.construction} Pull request is currently in work!`) :
        message(`${Symbols.ok} Pull request is ready to merge!`);
}

function checkReviewers() {
    const reviewers = danger.github.requested_reviewers.map((gitHubUser: GitHubUser) => {
        return `- ${gitHubUser.login}`;
    });

    danger.github.requested_reviewers.length === 0 ?
    warn(`${Symbols.warning} There are no reviewers assigned to this pull request!`) :
    message(`${Symbols.ok} Assigned reviewers: \n- @${reviewers.join('- @')}`);
}
