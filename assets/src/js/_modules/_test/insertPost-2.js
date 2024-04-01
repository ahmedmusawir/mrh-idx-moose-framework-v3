import $ from 'jquery';

class InsertPost {
  constructor() {
    this.init();
    // COLLECTING BUTTON
    this.button = $('#insert-test-post');
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
      title: $('.new-note-title').val(),
      content: $('.new-note-body').val(),
      status: 'publish'
    }

    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', selflistData.nonce);
      }, 
      url: selflistData.root_url + '/wp-json/wp/v2/posts',
      type: 'POST',
      data: newPostData
    })
    .done( (response) => {
      console.info(response);
      console.log('Awesome! ... Ajax Success');
    })
    .fail((response) => {
      console.error('Sorry ... Ajax failed');
      console.error(response);
    })
    .always(() => {
      console.info('Ajax finished as always...');
    });
  }
}

export default InsertPost;
