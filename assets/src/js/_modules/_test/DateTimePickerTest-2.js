import $ from 'jquery';
import datetimepicker from 'jquery-datetimepicker';

class DateTimePickerTest {
  constructor() {
    this.init();
    // COLLECTING ELEMENTS
    this.dateTimePickerBox = $('.datepicker-box');
    this.dateTimePickerInput = $('.date-time-picker-input');
    this.dateFromInput = $('#list-from-date-time-input');
    this.outputFromDate = $('.outputFromDate');
    this.dateToInput = $('#list-to-date-time-input');
    this.outputToDate = $('.outputToDate');

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
    // const yesterday = this.today.setDate(this.today.getDate() - 1);

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

  displayDateTime = (value) => {
    this.dateTimePickerBox.html(value);
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
        inline: true,
        // THE FOLLOWING FEATURE (Range Selector, disables dates that are outside min & max) DOESN'T WORK FOR INLINE CALENDAR
        // onShow: function (ct) {
        //   this.setOptions({
        //     maxDate: $('#list-to-date-time-input').val()
        //       ? $('#list-to-date-time-input').val()
        //       : false,
        //   });
        // },
      })
      .on('change', () => {
        const selected = this.dateTimePickerInput.val();
        this.dateTimePickerBox.html(selected);
      });
    // THE END DATE
    this.dateToInput
      .datetimepicker({
        onGenerate: function (ct) {
          $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
        },
        timepicker: false,
        datepicker: true,
        format: 'Y/m/d',
        maxDate: this.yesterday,
        yearStart: 2021,
        inline: true,
        // THE FOLLOWING FEATURE (Range Selector, disables dates that are outside min & max) DOESN'T WORK FOR INLINE CALENDAR
        // onShow: function (ct) {
        //   this.setOptions({
        //     minDate: $('#list-from-date-time-input').val()
        //       ? $('#list-from-date-time-input').val()
        //       : false,
        //   });
        // },
      })
      .on('change', () => {
        const selected = this.dateTimePickerInput.val();
        this.dateTimePickerBox.html(selected);
      });
  };
}
export default DateTimePickerTest;
