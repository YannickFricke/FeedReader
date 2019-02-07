import { danger, fail, message, warn } from 'danger';

const Symbols = {
    changed     : ':pencil:',
    construction: ':construction:',
    ok          : ':heavy_check_mark:',
};

writeModifiedFiles();
checkAssignee();
checkWIPStatus();
checkReviewers();

/**
 * Checks if the given value is null or undefined
 * @returns True when the value is not null nor undefined
 */
function isNullOrUndefined(value) {
    return value === null ||
           value === undefined;
}

/**
 * Checks if the current build is a pull request
 */
function isPr(): boolean {
    if (isNullOrUndefined(danger.github)) {
        return false;
    }

    if (isNullOrUndefined(danger.github.pr)) {
        return false;
    }

    return true;
}

/**
 * Writes all modified files which were changed
 */
function writeModifiedFiles() {
    message(`${Symbols.changed} Changed Files:\n- ${danger.git.modified_files.join('\n- ')}`);
}

/**
 * Checks if the pull request has an asignee
 */
function checkAssignee() {
    if (!isPr()) {
        return;
    }

    if (!danger.github.pr.assignee) {
        warn(`This pull request needs an assignee!`);
    }
}

/**
 * Checks if the current pull request is "work in progress"
 */
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

/**
 * Checks if the current pull request has any reviewers
 */
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
