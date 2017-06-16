var frisby = require('frisby');

frisby.create('GET JSON data from an endpoint')
  .get('https://token.qa.ktp.io/health')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json')
  .expectJSON({ 'status': 'Ok' })
.toss();

