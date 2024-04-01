import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods.js';
import CityInsertAjaxEvents from './CityInsertAjaxEvents';

class CityFormValidationEvents extends CityInsertAjaxEvents {
  constructor() {
    super();
    this.init();
    // COLLECTING CITY FORM ELEMENT
    this.cityInsertForm = $('#city-insert-form');
    // ADDING LETTERS & SPACES ONLY METHOD TO JQ VALIDATION
    $.validator.addMethod(
      'letters_and_space_only',
      function (value, element) {
        return this.optional(element) || /^[a-z ]+$/i.test(value);
      },
      'Letters and spaces only please'
    );
    // RUNNING VALIDATE
    this.validateCityForm();
    // TEST VAR
    this.testVar = 'A var from the child';
  }

  init = () => {
    // console.log('Univ Load More ...');
  };

  // MAIN FORM VALIDATION
  validateCityForm = () => {
    this.cityInsertForm.validate({
      onkeyup: function (element, event) {
        if (event.keyCode === 9 && this.elementValue(element) === '') {
          return;
        } else {
          this.element(element);
        }
      },
      rules: {
        'city-input-element': {
          lettersonly: true,
          maxlength: 25,
          minlength: 3,
        },
      },
      submitHandler: (form, event) => {
        event.preventDefault();
        // INSERT CITY WITH AJAX
        // this.insertCityByAjax();
        this.insertCityAjaxHandler();
      },
    });
  };

  insertCityByAjax = () => {
    alert('Ajax Insert Goes here ...');
  };
}

export default CityFormValidationEvents;
