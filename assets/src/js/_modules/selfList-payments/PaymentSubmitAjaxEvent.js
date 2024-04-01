import $ from 'jquery';
// import PaymentSummaryUiEvents from './PaymentSummaryUiEvents';

class PaymentSubmitAjaxEvents {
  constructor() {
    // super();
    this.init();
    // AJAX INFO
    this.ajaxUrl = selflistData.ajax_url;
    this.ajaxFunction = 'list_payment_and_publish_ajax';
    // COLLECTING ELEMENTS
    this.confirmPaymentPoints = $('#confirm-payment-points');
    this.currentPostId = $('.current-post-id');
    this.paymentByPointSubmitBtn = $('#payment-by-point-submit-btn');
    this.setEvents();
  }

  init = () => {
    // console.log('Payment Submit Ajax Event ...');
  };

  setEvents = () => {
    this.paymentByPointSubmitBtn.on('click', this.PaymentSubmitHandler);
  };

  PaymentSubmitHandler = () => {
    const newPaymentPoints = parseInt($.trim(this.confirmPaymentPoints.html()));
    const currentPostId = $.trim(this.currentPostId.html());
    // console.log('Confirmed New Payment Points: ', newPaymentPoints);
    // console.log('Current Post ID: ', currentPostId);

    // AJAX FUNCTION
    $.ajax({
      url: this.ajaxUrl,
      type: 'post',
      data: {
        action: this.ajaxFunction,
        newPaymentPoints,
        currentPostId,
      },
    })
      .done((res) => {
        console.log(res);
        // ADDING INSERTED DATA INTO LOCALSTORAGE FOR PREVIEW PAGE
        localStorage.setItem('newListPublishData', JSON.stringify(res));
      })
      .fail(() => {
        console.log('Ajax Failed! In ' + this.ajaxFunction);
      })
      .always(() => {
        // console.log('Ajax Dynamic Loaction Filter Complete');
        window.location.href = '/list-publish-summary/';
      });
  };
}

export default PaymentSubmitAjaxEvents;
