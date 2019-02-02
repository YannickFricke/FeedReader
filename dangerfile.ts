import { danger, fail, message } from 'danger';

writeModifiedFiles();
checkAssignee();
checkWIPStatus();

function writeModifiedFiles() {
    const modifiedFiles = danger.git.modified_files.join('\n- ');
    message('Changed Files in this PR: \n- ' + modifiedFiles);
}

function checkAssignee() {
    if (!danger.github.pr.assignee) {
        fail('This pull request needs an assignee, and optionally include any reviewers.');
    }
}

function checkWIPStatus() {
    danger.github.pr.title.includes('WIP') ?
        fail('Pull request is currently in work!') :
        message(':heavy_check_mark: Pull request is ready to merge!');
}
