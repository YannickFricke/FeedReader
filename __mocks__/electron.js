module.exports = {
    app: jest.fn(),
    dialog: jest.fn(),
    match: jest.fn(),
    remote: {
        app: {
            getPath: jest.fn().mockReturnValue('mocked_directory')
        }
    },
    require: jest.fn(),
};
