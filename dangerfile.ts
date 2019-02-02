import { danger, message } from 'danger';

writeModifiedFiles();

function writeModifiedFiles() {
    const modifiedFiles = danger.git.modified_files.join('\n- ');
    message('Changed Files in this PR: \n- ' + modifiedFiles);
}
