# FeedReader [![Build Status](https://travis-ci.org/YannickFricke/FeedReader.svg?branch=develop)](https://travis-ci.org/YannickFricke/FeedReader) [![Coverage Status](https://coveralls.io/repos/github/YannickFricke/FeedReader/badge.svg?branch=develop)](https://coveralls.io/github/YannickFricke/FeedReader?branch=develop) [![Join the chat at https://gitter.im/RSS-ATOM-FeedReader/Lobby](https://badges.gitter.im/RSS-ATOM-FeedReader/Lobby.svg)](https://gitter.im/RSS-ATOM-FeedReader/Lobby) [![Greenkeeper badge](https://badges.greenkeeper.io/YannickFricke/FeedReader.svg)](https://greenkeeper.io/) <!-- omit in toc -->

FeedReader is an electron application for reading RSS feeds in a beautiful GUI. It also supports ATOM feeds.

- [Requirements](#requirements)
- [Installation](#installation)
- [Packaging](#packaging)
  - [Package for Windows and Linux](#package-for-windows-and-linux)
  - [Package for Mac OS](#package-for-mac-os)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Requirements

* A recent version of [Node.js](https://nodejs.org/)
* A recent version of [Yarn](https://yarnpkg.com/)

## Installation

Clone or download this repository.

Install all dependencies

```shell
yarn install
```

Run the "start" script with

```shell
yarn run start
```

Then an electron window should appear

## Packaging

### Package for Windows and Linux

To package this application you need to run the `build:prod` script first with:

```shell
yarn run build:prod
```

Otherwise electron-builder can't find the source script for the packaging process.

Then run

```shell
yarn run package
```

to package the application for Windows and Linux. The Mac OS build is currently excluded from it.

### Package for Mac OS

When you want to package the application for Mac OS you need Mac OS and XCode for building it.

Then run

```shell
yarn run electron-builder build -m
```

for building for the Mac OS platform.

Currently we build for all three platforms with Travis-CI.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Run tests with the following command

```shell
yarn test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Credits

Icon made by [Agata Kuczminska](https://www.flaticon.com/authors/agata-kuczminska) from [https://www.flaticon.com/](www.flaticon.com) which is licensed under [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
