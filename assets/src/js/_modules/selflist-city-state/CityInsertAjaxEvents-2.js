import $ from 'jquery';
import CityFormValidationEvents from './CityFormValidationEvents';

class CityInsertAjaxEvents extends CityFormValidationEvents {
  // class CityInsertAjaxEvents {
  constructor() {
    super();
    this.init();
    // COLLECTING ELEMENTS
    this.cityInsertBtn = $('#city-name-insert-btn');
    this.setEvents();
    // TEST VAR
    this.testVar = 'A var from the child';
  }

  init = () => {
    console.log(this.cityInsertForm);
  };

  setEvents = () => {
    // this.cityInsertBtn.on('click', this.insertCityAjaxHandler);
  };

  insertCityAjaxHandler = () => {
    console.log('clicked city insert ...');
    // console.log(this.testVar);
    // this.insertCityByAjax();
  };
}

export default CityInsertAjaxEvents;
