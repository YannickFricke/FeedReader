import { danger, fail, GitHubUser, message, warn } from 'danger';

const Symbols = {
    changed     : ':pencil:',
    construction: ':construction:',
    ok          : ':heavy_check_mark:',
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
        fail(`This pull request needs an assignee!`);
    }
}

function checkWIPStatus() {
    danger.github.pr.title.includes('WIP') ?
        warn(`${Symbols.construction} Pull request is currently in work! ${Symbols.construction}`) :
        message(`${Symbols.ok} Pull request is ready to merge!`);
}

function checkReviewers() {
    const reviewers: string[] = [];

    if (danger.github.requested_reviewers.length > 0) {
        danger.github.requested_reviewers.forEach((reviewer: GitHubUser) => {
            reviewers.push(`\n- @${reviewer.login}`);
        });
    }

    reviewers.length === 0 ?
    warn(`There are no reviewers assigned to this pull request!`) :
    message(`${Symbols.ok} Assigned reviewers: ${reviewers.join('')}`);
}
