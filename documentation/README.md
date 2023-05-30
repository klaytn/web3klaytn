# Use Redocly for generating web3klaytn docs

## Setting Node.js
- Use node version more than v12
```shell
$ brew install nvm
$ nvm use v16.13.1
```

## Install
- Install node.js using nvm
- Use yarn 
```shell
$ yarn
```

## To start web3klaytn docs server
```shell
// web3rpc OAS 3.0 specification first
$ cd {root}/web3rpc/rpc-specs/
$ ./generate-namespace.sh

// make documentation yaml file
$ cd {root}/documentation
$ ./generate-docs.sh

// start server
$ yarn start
```
    