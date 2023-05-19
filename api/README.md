## api directory

- JSON-RPC API definition in yaml based on openapi 3.0
- [OpenAPI Specification v3.1.0](https://spec.openapis.org/oas/latest.html)
- klay.yaml
    - added paths for JSON-RPC APIs
- paths
    - The klay.yaml file refers to files created in the paths directory, and API definitions are grouped by the paths directory(tags).
- components
    - define information about requests, response, schemas
- code-samples
    - You can write runnable examples with CURL
- redocly
    - redoc styles document
    - create all APIs only in klaytn-openapi.yaml file

    ```shell
    $ yarn build
    ```

    - Location of generated files : site/klyatn-openapi.yaml

### Add API
#### Choose an API tag(group)
- klay
- governance
- eth
- etc
#### Add paths
- choose directory like api/paths/klay, it's up to you which making a new file or using an existed file
  - api/paths/klay/rewards.yaml
- add REST API paths like /klay/getRewards, it's not a real path in json rpc. It's for a syntactic path, this uri path is not used in json rpc call.
