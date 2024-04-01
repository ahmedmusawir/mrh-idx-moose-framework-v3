import $ from 'jquery';
import AdminAjaxEvents from './AdminAjaxEvents';

class AppManagerSettings extends AdminAjaxEvents {
  constructor() {
    super();
    this.init();
    // COLLECTING ELEMENTS
    this.button = $('#selflist-find-user-button');
    this.userSearchInput = $('#selflist-search-user');
    this.userSearchText;

    this.setEvents();
  }

  init = () => {
    // console.log('ES6 From WPAdmin ...');
    // alert(this.button);
  };

  setEvents = () => {
    this.button.on('click', this.clickHandler);
  };

  clickHandler = () => {
    this.userSearchText = this.userSearchInput.val();
    this.listUsersAjax();
  };
}

export default AppManagerSettings;

// $(() => {
//   new AppManagerSettings();
// });

// jQuery(($) => {
//   new AppManagerSettings();
// });

// jQuery(function ($) {
//   new AppManagerSettings();
// });
