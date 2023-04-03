## site

- klaytn-openapi.yaml
    - Define OpenAPIs created with `yarn build` 
    - Create divided API files as one Yaml file
    - This document is used as a specification in redocly format API document and SwaggerUI
- index.html
    - API documentation in redocly format is provided based on klaytn-openapi.yaml
    - By providing Request samples, you can see examples of the development language you want.
- SwaggerUI
    - Provides Swagger-style API documentation
    - APIs can be directly tested on the web by providing SwaggerUI function
    - You can test CURL-style APIs online by selecting local, baobab, or cypress servers.
