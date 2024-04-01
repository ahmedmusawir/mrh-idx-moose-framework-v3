import $ from 'jquery';

class TestJsToPhp {
  constructor() {
    // COLLECTING AJAX INFO
    this.ajaxUrl = selflistData.ajax_url;
    this.ajaxFunction = 'test_ajax';
    this.previewDisplayBox = $('#test-ajax-data');
    this.init();
  }

  init = () => {
    console.log('Test Js Php ...');
    const listObject = JSON.parse(localStorage.getItem('newListData'));
    // console.log('List Obj: ', listObject);
    // console.log('The New List ID', listObject.id);

    $.ajax({
      url: this.ajaxUrl,
      type: 'POST',
      data: {
        post_id: listObject.id,
        action: this.ajaxFunction,
      },
    })
      .done((res) => {
        console.log(res);
        this.previewDisplayBox.html(res);
      })
      .fail((res) => {
        console.error(res);
      });
  };
}

export default TestJsToPhp;
