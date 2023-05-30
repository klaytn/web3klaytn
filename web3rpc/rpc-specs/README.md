# rpc-specs
## Directories
- JSON-RPC API definition in yaml based on [openapi 3.0](https://spec.openapis.org/oas/latest.html)
- paths
    - The web3klaytn.yaml file in documentation refers to files created in the paths directory, and API definitions are grouped by the paths directory(tags).
- components
    - define information about requests, response, schemas
- code-samples
    - You can write runnable examples with CURL, javascript, java and python

## Setting for Node.js
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

## Generate RPC Specifications for each namespaces
```shell
$ sh generate-namespace.sh
```