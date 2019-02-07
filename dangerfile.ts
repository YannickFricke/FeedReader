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
    message(`${Symbols.changed} Changed Files:\n- ${danger.git.modified_files.join('\n- ')}`);
}

function checkAssignee() {
    if (!isPr()) {
        return;
    }

    if (!danger.github.pr.assignee) {
        warn(`This pull request needs an assignee!`);
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
        fail(`${Symbols.construction} Pull request is currently in work! ${Symbols.construction}`) :
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

    const reviewers: string[] = [];

    danger.github.requested_reviewers.teams.forEach((requestedTeam) => {
        reviewers.push(`@${danger.github.thisPR.owner}/${requestedTeam}`);
    });

    danger.github.requested_reviewers.users.forEach((requestedUser) => {
        reviewers.push(`@${requestedUser}`);
    });

    if (reviewers.length === 0) {
        warn(`There are no reviewers assigned to this pull request!`);
    } else {
        message(`${Symbols.ok} Assigned reviewers:\n-${reviewers.join('\n -')}`);
    }
}
