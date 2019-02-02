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

function isNullOrUndefined(value) {
    return value === null ||
           value === undefined;
}

function isPr(): boolean {
    if (isNullOrUndefined(danger.github)) {
        return false;
    }

    if (isNullOrUndefined(danger.github.pr)) {
        return false;
    }

    return true;
}

function writeModifiedFiles() {
    const modifiedFiles = danger.git.modified_files.join('\n- ');
    message(`${Symbols.changed} Changed Files: \n- ` + modifiedFiles);
}

function checkAssignee() {
    if (!isPr()) {
        return;
    }

    if (!danger.github.pr.assignee) {
        fail(`This pull request needs an assignee!`);
    }
}

function checkWIPStatus() {
    if (!isPr()) {
        return;
    }

    if (isNullOrUndefined(danger.github.pr.title)) {
        return;
    }

    danger.github.pr.title.includes('WIP') ?
        warn(`${Symbols.construction} Pull request is currently in work! ${Symbols.construction}`) :
        message(`${Symbols.ok} Pull request is ready to merge!`);
}

async function checkReviewers() {
    if (!isPr()) {
        return;
    }
    
    if (isNullOrUndefined(danger.github.thisPR)) {
        return;
    }

    if (isNullOrUndefined(danger.github.requested_reviewers)) {
        return;
    }

    const permissionLevel = await danger.github.api.repos.getCollaboratorPermissionLevel({
        owner: danger.github.thisPR.owner,
        repo: danger.github.thisPR.repo,
        username: danger.github.pr.user.login
    });

    if (
        permissionLevel.data.permission === 'write' || 
        permissionLevel.data.permission === 'admin'
    ) {
        return;
    }

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
