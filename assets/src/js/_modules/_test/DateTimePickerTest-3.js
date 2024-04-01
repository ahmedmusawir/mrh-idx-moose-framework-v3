import $ from 'jquery';
import datetimepicker from 'jquery-datetimepicker';

class DateTimePickerTest {
  constructor() {
    this.init();
    // COLLECTING ELEMENTS
    this.dateTimePickerBox = $('.datepicker-box');
    this.dateTimePickerInput = $('.date-time-picker-input');
    this.dateFromInput = $('#list-from-date-time-input');
    this.outputFromDate = $('.outputFromDateTime');
    this.dateToInput = $('#list-to-date-time-input');
    this.outputToDate = $('.outputToDateTime');

    // SETTING DATEPICKER
    $.datetimepicker.setLocale('en');

    // SET EVENT
    this.today = new Date();
    this.yesterday = this.today.setDate(this.today.getDate() - 1);

    this.setMainDateTimeEvents();
    this.setDateRangeEvents();
  }

  init = () => {
    console.log('Date Time Picker Test ...');
  };

  setMainDateTimeEvents = () => {
    this.dateTimePickerInput
      .datetimepicker({
        onGenerate: function (ct) {
          $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
        },
        timepicker: false,
        datepicker: true,
        format: 'M d, Y',
        maxDate: this.yesterday,
        yearStart: 2021,
        // inline: true,
      })
      .on('change', () => {
        const selected = this.dateTimePickerInput.val();
        // alert(selected);
        this.dateTimePickerBox.html(selected);
      });
  };

  setDateRangeEvents = () => {
    // THE START DATE
    this.dateFromInput
      .datetimepicker({
        onGenerate: function (ct) {
          $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
        },
        timepicker: false,
        datepicker: true,
        format: 'M d, Y',
        maxDate: this.yesterday,
        yearStart: 2021,
        // inline: true,
      })
      .on('change', () => {
        const selected = this.dateFromInput.val();
        this.outputFromDate.html(selected);
      });
    // THE END DATE
    this.dateToInput
      .datetimepicker({
        onGenerate: function (ct) {
          $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
        },
        timepicker: false,
        datepicker: true,
        format: 'M d, Y',
        maxDate: this.yesterday,
        yearStart: 2021,
        // inline: true,
      })
      .on('change', () => {
        const selected = this.dateToInput.val();
        this.outputToDate.html(selected);
      });
  };

  displayRangeDateTime = (value) => {
    this.dateTimePickerBox.html(value);
  };
}
export default DateTimePickerTest;
