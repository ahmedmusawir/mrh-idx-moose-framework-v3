import $ from 'jquery';

class InsertPost {
  constructor() {
    this.init();
    // COLLECTING BUTTON
    this.button = $('#insert-test-post');
    this.ajaxUrl = `${selflistData.root_url}/wp-json/wp/v2/posts`;
    console.log(this.ajaxUrl);
    this.wpNonce = selflistData.nonce;
    console.log(this.wpNonce);
    
    this.setEvents();

  }

  init = () => {
    console.log('TEST - Insert Post');
  };

  setEvents = () => {
    this.button.on('click', this.clickInsertHandler);
  };

  clickInsertHandler() {
    let newPostData = {
      'title': $('.new-note-title').val(),
      'content': $('.new-note-body').val(),
      'status': 'publish'
    }
    // console.info(newPostData);
    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', this.wpNonce);
      }, 
      url: this.ajaxUrl,
      type: 'POST',
      data: newPostData,
      success: (response) => {
        console.info(response);
        console.log('Awesome! ... Ajax Success');
      },
      error: (response) => {
        console.info(response);
        console.log('Awesome! ... Ajax failed');
      }
    })
 

    // $.ajax({
    //   beforeSend: (xhr) => {
    //     xhr.setRequestHeader('X-WP-Nonce', this.wpNonce);
    //   }, 
    //   url: this.ajaxUrl,
    //   type: 'POST',
    //   data: newPostData
    // })
    // .done( (response) => {
    //   // console.info(response);
    //   console.log('Awesome! ... Ajax Success');
    // })
    // .fail((response) => {
    //   console.error('Sorry ... Ajax failed');
    //   // console.error(response);
    // })
    // .always(() => {
    //   console.info('Ajax finished as always...');
    // });
  }
}

export default InsertPost;
