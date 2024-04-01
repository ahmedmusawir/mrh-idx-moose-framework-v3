import $ from 'jquery';
import datetimepicker from 'jquery-datetimepicker';

class DateTimePickerTest {
  constructor() {
    this.init();
    // COLLECTING ELEMENTS
    this.dateTimePickerBox = $('.datepicker-box');
    this.dateTimePickerInput = $('.date-time-picker-input');
    this.dateFromInput = $('#list-from-date-input');
    this.outputFromDate = $('.outputFromDate');
    this.dateToInput = $('#list-to-date-input');
    this.outputToDate = $('.outputToDate');

    // SETTING DATEPICKER
    $.datetimepicker.setLocale('en');

    // SET EVENT
    this.setEvents();
  }

  init = () => {
    console.log('Date Time Picker Test ...');
  };

  setEvents = () => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);

    this.dateTimePickerInput
      .datetimepicker({
        onGenerate: function (ct) {
          $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
        },
        // onChangeDateTime: (dp, $input) => {
        //   // alert($input.val());
        //   this.displayDateTime($input.val());
        // },
        timepicker: false,
        datepicker: true,
        format: 'M d, Y',
        maxDate: yesterday,
        yearStart: 2021,
        // inline: true,
      })
      .on('change', () => {
        const selected = this.dateTimePickerInput.val();
        alert(selected);
      });
  };

  displayDateTime = (value) => {
    this.dateTimePickerBox.html(value);
  };
}
export default DateTimePickerTest;
