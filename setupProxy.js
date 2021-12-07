
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use( '/api', 
//         createProxyMiddleware({
//             target: "https://newsapi.org",
//             changeOrigin: true,
//         })
//     );
// };

//   const proxy = require('http-proxy-middleware');

//   module.exports = function(app) {
//     app.use(proxy("/api/auth", { target: "http://localhost:8080/" }));
//     app.use(proxy("/api/users", { target: "http://localhost:8081/" }));
//   };



// const proxy = require('http-proxy-middleware');
 
// module.exports = function(app) {
//     const headers  = {
//         "Content-Type": "application/json",
//         Authorization: "/v2/top-headlines？country = us＆category = business＆apiKey = 702c5fa7112c4bc2a7cc9801135ebbda",
//     };

//     //proxyの第一引数はドメイン以下の部分
//     //第二引数のtarget部はドメイン

//     app.use( proxy("/v2/top-headlines？country = us＆category = business＆apiKey = 702c5fa7112c4bc2a7cc9801135ebbda", { target: "https://newsapi.org/",changeOrigin: true, secure: false, headers: headers} ) );  
// };
