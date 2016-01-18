# react-router-demo
Demonstrate usage of react-router for few react apps

## Production strategy

Prepare a build directory using babel. Then we don't need babel to transpile on our production boxes

```shell
## Create a build directory with source-maps
./node_modules/.bin/babel -d ./build ./app -s
```
