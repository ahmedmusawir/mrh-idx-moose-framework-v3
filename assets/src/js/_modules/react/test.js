var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'domain.com/wp-json' });

wp.myCustomResource = wp.registerRoute('jwt-auth/v1', '/token', {
  methods: 'POST',
  params: ['username', 'password'],
});

wp.myCustomResource()
  .username('myUserName')
  .password('myPassword')
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
