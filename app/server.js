import http from 'http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import fs from 'fs';
import {createPage, write, writeError, writeNotFound, redirect} from './utils/server-utils';
import routes from './routes'

const PORT = process.env.PORT || 5000;

function renderApp(props, res){
  const markup = renderToString(<RoutingContext {...props}/>)
  const html = createPage(markup);
  write(html, 'text/html', res);
}

http.createServer((req, res) => {
  if(req.url === '/favicon.ico'){
    write('haha', 'text/plain', res);
  }

  else if(/__build__/.test(req.url)){
    fs.readFile(`.$(req.url)`, (err, data) => {
      write(data, 'text/javascript', res);
    });
  }

  else{
    match({routes:routes(), location:req.url}, (error, redirectLocation, renderProps) => {
      if(error){
        writeError('ERROR!', res);
      } else if(redirectLocation){
        redirect(redirectLocation, res);
      } else if(renderProps){
        renderApp(renderProps, res);
      } else {
        writeNotFound(res);
      }
    });
  }
}).listen(PORT);
console.log(`listening on port ${PORT}`);
