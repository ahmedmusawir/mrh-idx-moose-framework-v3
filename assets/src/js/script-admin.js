import $ from 'jquery';
import AppManagerSettings from './_admin-modules/AppManagerSettings';
import AdminAjaxEvents from './_admin-modules/AdminAjaxEvents';

class SelflistAdminScripts {
  constructor() {
    // console.info('ES6 Admin Script normal Initialized!');
    new AppManagerSettings();
    new AdminAjaxEvents();
  }
}

const selflistAdmin = new SelflistAdminScripts();

$(() => {
  new SelflistAdminScripts();
});
