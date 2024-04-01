/**
 * PUBLIC MAIN SCRIPT
 */
import ReactDOM from 'react-dom';
import React from 'react';
import ReactAppThemeOne from './_modules/react/ReactAppThemeOne';
import ReactAppThemeTwo from './_modules/react/ReactAppThemeTwo';
import ReactWpApp1 from './_modules/react/ReactWpApp1';
import $ from 'jquery';

class App {
  constructor() {
    // this.cardBox = $('.card');
    // console.log(this.cardBox);

    const ajaxFunction = 'test_wp_ajax_function';
    const postId = 465;

    console.info('ES8 App PUBLIC Initialized!');
    // LUNCHING REACT APP THEME ONE
    const appThemeOne = document.getElementById('app-theme-1');
    if (appThemeOne) {
      ReactDOM.render(<ReactAppThemeOne />, appThemeOne);
    }
    // LUNCHING REACT APP THEME TWO
    const appThemeTwo = document.getElementById('app-theme-2');
    if (appThemeTwo) {
      ReactDOM.render(<ReactAppThemeTwo />, appThemeTwo);
    }
    // LUNCHING REACT WP APP 1
    const reactWpApp1 = document.getElementById('react-wp-app-1');
    if (reactWpApp1) {
      ReactDOM.render(<ReactWpApp1 />, reactWpApp1);
    }
  }
}

const app = new App();
