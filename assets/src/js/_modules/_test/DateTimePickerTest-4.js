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

    // SETTING GLOBALS
    this.selectedStart;
    this.selectedEnd;
    this.today = new Date();
    this.yesterday = this.today.setDate(this.today.getDate() - 1);
    // SETTING EVENTS
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
    this.dateFromInput.datetimepicker({
      onGenerate: function (ct) {
        $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
      },
      onChangeDateTime: (dp, $input) => {
        this.selectedStart = $input.val();
        this.displayDateTime();
      },
      timepicker: false,
      datepicker: true,
      format: 'M d, Y',
      maxDate: this.yesterday,
      yearStart: 2021,
      inline: true,
    });

    // THE END DATE
    this.dateToInput.datetimepicker({
      onGenerate: function (ct) {
        $(this).find('.xdsoft_date').toggleClass('xdsoft_disabled');
      },
      onChangeDateTime: (dp, $input) => {
        this.selectedEnd = $input.val();
        this.displayDateTime();
      },
      timepicker: false,
      datepicker: true,
      format: 'M d, Y',
      maxDate: this.yesterday,
      yearStart: 2021,
      inline: true,
    });
  };

  displayDateTime = () => {
    if (this.selectedStart) {
      this.outputFromDate.html(
        `<h5 class="text-success">${this.selectedStart}</h5>`
      );
    }
    if (this.selectedEnd) {
      this.outputToDate.html(`<h5 class="text-info">${this.selectedEnd}</h5>`);
    }
  };
}
export default DateTimePickerTest;
