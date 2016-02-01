# react-router-demo
Routing and serverside rendering handled by `react-router`.

## Usage

```shell
git clone git@github.com:samarpanda/react-router-demo.git
npm install

```

## Quick commands

1. Client side rendering with react hot loader dev environment `npm run dev`. Open browser `http://localhost:8080`  
1. Server side rendering `npm start`. Open browser `http://localhost:5000`  

## Production Note

Prepare a build directory using babel. Then we don't need babel to transpile on our production boxes

```shell
## Create a build directory with source-maps
./node_modules/.bin/babel -d ./build ./app -s
```
