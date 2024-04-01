import $ from 'jquery';
// Using commonjs
// require('jquery-validation');
// require('jquery-validation/dist/additional-methods.js');
// Using ESM
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods.js';

class FormValdationTest {
  constructor() {
    this.init();
    // COLLECTING BUTTON
    this.button = $('#submit-btn');
    this.setEvents();
    // ADDING LETTERS & SPACES ONLY METHOD TO JQ VALIDATION
    $.validator.addMethod(
      'lettersonly',
      function (value, element) {
        return this.optional(element) || /^[a-z ]+$/i.test(value);
      },
      'Letters and spaces only please'
    );

    // ADDING PROPER EMAIL VAIDATION
    $.validator.addMethod(
      'validate_email',
      function (value, element) {
        if (
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            value
          )
        ) {
          return true;
        } else {
          return false;
        }
      },
      'Please enter a valid Moose.'
    );
  }

  init = () => {
    console.log('Form Val Test Loaded ...');
  };

  setEvents = () => {
    this.button.on('click', this.clickHandler);
  };

  clickHandler = (e) => {
    console.log('Form Val Test clicked');
    const $this = this;

    $('#test-form').validate({
      rules: {
        firstname: { lettersonly: true, maxlength: 15, minlength: 3 },
        lastname: { lettersonly: true, maxlength: 15, minlength: 3 },
        email: { validate_email: true },
      },
      submitHandler: function (form, event) {
        event.preventDefault();
        //submit via ajax
        $this.sampleAjaxFunction();
      },
    });
  };

  sampleAjaxFunction = () => {
    alert('Do some stuff... with Ajax');
  };
}

export default FormValdationTest;
