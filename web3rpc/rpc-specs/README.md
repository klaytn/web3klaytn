# rpc-specs
## Directories
- JSON-RPC API definition in yaml based on [openapi 3.0](https://spec.openapis.org/oas/latest.html)
- paths
    - web3klaytn.yaml file in documentation refers to files created in the paths directory, and API definitions are grouped by the paths directory(tags).
- components
    - definition about requests, response, schemas
- code-samples
    - runnable examples with CURL, javascript, java and python
- namespaces
    - to store API specifictions that is used by the code generator (see generate-namespace.sh)