# Use Redocly for generating static yaml specification

## Setting Node
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

## Generate documentation for SDK namespace
```shell
$ sh generate-namespace.sh
```

## Usage
#### `yarn start`
Starts the reference docs preview server.

#### `yarn build`
Bundles the definition to the `site/klaytn-openapi.yaml`.

## Config setting
#### `redocly.yaml`
See [redocly configuration](https://redocly.com/docs/cli/configuration/)

### Remove query param for Redocly Site
 - After generate SDK for all languages (Javascript, Python, Java)

```shell
$ yarn remove_query_param
```
    