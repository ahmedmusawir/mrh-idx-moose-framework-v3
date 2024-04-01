import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';

class DatePickerTest {
  constructor() {
    this.init();
    // COLLECTING ELEMENTS
    this.datePickerBox = $('.datepicker-box');
    // this.datepickerInput = $('.datepicker-input');
    this.dateFromInput = $('#list-from-date-input');
    this.outputFromDate = $('.outputFromDate');
    this.dateToInput = $('#list-to-date-input');
    this.outputToDate = $('.outputToDate');

    // SETTING DATEPICKER
    datepickerFactory($);
    $.datepicker.setDefaults({
      // dateFormat: 'yy-M-dd',
      // showAnim: 'drop',
    });
    this.setDatepicker();

    // SET EVENT
    this.setEvents();
  }

  init = () => {
    // console.log('Date Picker Test ...');
  };

  setDatepicker = () => {
    // The following collects the date from calander and drops in a separate div
    // const opts = {
    //   defaultDate: 0,
    // };
    // this.datePickerBox.datepicker(
    //   $.extend(
    //     {
    //       altField: '.datepicker-input',
    //     },
    //     opts
    //   )
    // );

    // THE FOLLOWING SHOULD DISPLAY FROM DATE
    this.dateFromInput
      .datepicker({
        numberOfMonth: 1,
        minDate: new Date(),
      })
      .on('change', () => {
        // console.log('Moose is loose');
        const dateFormat = 'mm/dd/yy';
        const theFromDate = $.datepicker.parseDate(
          dateFormat,
          this.dateFromInput.val()
        );
        console.log(theFromDate);
        this.outputFromDate.html(theFromDate);
      });
    // this.dateToInput.datepicker();
    // THE FOLLOWING SHOULD DISPLAY TO DATE
    this.dateToInput
      .datepicker({
        minDate: new Date(),
      })
      .on('change', () => {
        // console.log('Moose is loose');
        const dateFormat = 'mm/dd/yy';
        const theToDate = $.datepicker.parseDate(
          dateFormat,
          this.dateToInput.val()
        );
        console.log(theToDate);
        this.outputToDate.html(theToDate);
      });
  };

  setEvents = () => {};
}
export default DatePickerTest;
