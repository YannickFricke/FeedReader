if [ "$TRAVIS_OS_NAME" == "linux" ]; then
    docker run --rm \
    -v ${PWD}:/project \
    -v ~/.cache/electron:/root/.cache/electron \
    -v ~/.cache/electron-builder:/root/.cache/electron-builder \
    electronuserland/builder:wine \
    /bin/bash -c "yarn --pure-lockfile && yarn test && yarn build:prod && yarn package"
else
    yarn danger ci && yarn coveralls && yarn run build:prod && yarn run electron-builder
fi