### ampersand-fetch-test

#### This repo is for testing ampersand-model when it fetches from a 404.



Install modules: `npm i`

Bundle files: `browserify ./static/index.js > ./static/app.js`

Start node server: `node ./server.js`



`/v1/items` is a 404, and the server just sends the `index.html` to catch the request.
Even with the returned data as `html` the model calls the `Fetch: success` function.
<img src="https://raw.githubusercontent.com/stevelacy/ampersand-fetch-test/master/sc1.png">

This image shows the network connections, and the returned data as html.

<img src="https://raw.githubusercontent.com/stevelacy/ampersand-fetch-test/master/sc2.png">
