import $ from 'jquery';

class PublishListSummaryDisplay {
  constructor() {
    this.init();
    // STATUS VARS
    this.listPointStatus;
    this.listPublishStatus;
    this.listPublishDays;
    // COLLECTING ELEMENTS
    this.publishedPostIdBox = $('.published-post-id');
    this.listPointStatusBox = $('#list-point-status');
    this.listPublishStatusBox = $('#list-publish-status');
    this.listPublishForDaysBox = $('#published-for-days');
    // DISPLAY SUMMARY ON PAGE
    this.displaySummary();
  }

  init = () => {
    // console.log('Display Publish Summary ...');
  };

  displaySummary = () => {
    const publishObject = JSON.parse(
      localStorage.getItem('newListPublishData')
    );
    // console.log('Publish Obj: ', publishObject);

    // DISPLAY POST ID
    if (this.publishedPostIdBox.length && publishObject) {
      this.publishedPostIdBox.html(publishObject.post_id);

      // VERIFY POINT UPDATE STATUS
      if (publishObject.points_update_success === true) {
        this.listPointStatus = '<span class="text-success"> Success!</span>';
      } else {
        this.listPointStatus = '<span class="text-danger"> Failed!</span>';
      }
      // DISPLAY POINT STATUS
      if (
        this.listPointStatusBox.length &&
        publishObject.points_update_success
      ) {
        this.listPointStatusBox.html(this.listPointStatus);
      }

      // VERIFY PUBLISH UPDATE STATUS
      if (publishObject.post_id == publishObject.post_update_status) {
        this.listPublishStatus = '<span class="text-success"> Success!</span>';
      } else {
        this.listPublishStatus = '<span class="text-danger"> Failed!</span>';
      }
      // DISPLAY PUBLISH STATUS
      if (this.listPublishStatusBox.length && publishObject.post_id) {
        this.listPublishStatusBox.html(this.listPublishStatus);
      }

      // VERIFY FINAL STATUS
      if (
        publishObject.points_update_success === true &&
        publishObject.post_id == publishObject.post_update_status
      ) {
        this.listPublishDays = publishObject.publish_days;
      } else {
        this.listPublishDays = 0;
      }
      // DISPLAY FINAL STATUS
      this.listPublishForDaysBox.html(this.listPublishDays);
    } else {
      console.info(
        'List Object not found in LocalStorage : [PublishListSummaryDisplay]'
      );
    }
  };
}

export default PublishListSummaryDisplay;
