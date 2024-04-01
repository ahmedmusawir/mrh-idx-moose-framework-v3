import $ from 'jquery';
import { selectize } from 'selectize';
import ListInsertUiDataParent from './ListInsertUiDataParent';

/**
 This is a child class of ListInsertUiEvents and uses the selectize library. This one
 Inserts the the List Insert Form data into the WP DB via the REST API. This inserts selectize data, normal form data and ACF data into the WP DB
 */

class ListInsertEventsAjax extends ListInsertUiDataParent {
  constructor() {
    super();
    // this.init();
    // COLLECTING ELEMENTS
    this.listInsertButton = $('#list-insert-submit-btn');
    this.catDisplayUiBox = $('#cat-display-ui-box');
    this.catSelectBox = $('#category-choice-box');
    // SETTING EVENTS
    this.setEvents();
  }

  init = () => {
    console.log('ListInsertEventsAjax - Insert Post');
  };

  setEvents = () => {
    this.listInsertButton.on('click', this.clickInsertListHandler);
  };

  clickInsertListHandler = () => {
    // console.log('List Submit Clicked');

    // COLLECTING FORM DATA
    this.getCategoryData();
    this.getStateCity();
    this.getListFormData();

    // Categories List
    const categoryIds = `${this.currentMainId}, ${this.currentPrimoId}, ${this.currentSecondoId}, ${this.currentTerzoId}`;
    // Contact Info Vars
    const name = this.contactName;
    const listTitle = `This List Posted by: ${name}`;
    const description = this.listDescription;
    const phone = this.contactPhone;
    const email = this.contactEmail;
    const website = this.contactWebsite;

    // State & City Taxonomy IDs
    const custom_tax = `['states' => [${this.cityId}, ${this.stateId}]]`;

    // Social Media URLs
    const facebook = this.socialFacebook;
    const yelp = this.socialYelp;
    const instagram = this.socialInstagram;
    const linkedin = this.socialLinkedin;
    const googlePlus = this.socialGooglePlus;
    const twitter = this.socialTwitter;

    // UNIT TESTNG Debugging Output
    console.log(`CATEGORY: ${categoryIds}`);
    console.log(`CITY & STATE IDS: `);
    console.log(`DESCRIPTION: ${description}`);
    console.log(`NAME: ${name}`);
    console.log(`PHONE: ${phone}`);
    console.log(`EMAIL: ${email}`);
    console.log(`WEBSITE: ${website}`);
    console.log(`FACEBOOK: ${facebook}`);
    console.log(`YELP: ${yelp}`);
    console.log(`INSTAGRAM: ${instagram}`);
    console.log(`LINKEDIN: ${linkedin}`);
    console.log(`GOOGLEPLUS: ${googlePlus}`);
    console.log(`TWITTER: ${twitter}`);

    // PREPARING FORM DATA FOR REST API
    let newPostData = {
      categories: categoryIds,
      tax_input: custom_tax,
      title: listTitle,
      content: description,
      'fields[your_name]': name, // ACF Item
      'fields[your_phone]': phone, // ACF Item
      'fields[your_email]': email, // ACF Item
      'fields[your_site]': website, // ACF Item
      'fields[your_facebook]': facebook, // ACF Item
      'fields[your_yelp]': yelp, // ACF Item
      'fields[your_instagram]': instagram, // ACF Item
      'fields[your_linkedin]': linkedin, // ACF Item
      'fields[your_google_plus]': googlePlus, // ACF Item
      'fields[your_twitter]': twitter, // ACF Item
      status: 'pending',
    };

    // UNIT TESTING debugging info
    console.log('newPostData: ', newPostData);

    // AJAX POST INSERT
    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', selflistData.nonce);
      },
      url: selflistData.root_url + '/wp-json/wp/v2/posts',
      type: 'POST',
      data: newPostData,
    })
      .done((response) => {
        console.info(response);
        console.log('Awesome! ... Ajax Success');
        // REMOVING CAT DATA FROM THE LOCAL STORAGE FOR CLEANUP
        localStorage.removeItem('catData');
        // ADDING INSERTED DATA INTO LOCALSTORAGE FOR PREVIEW PAGE
        localStorage.setItem('newListData', JSON.stringify(response));
        // REDIRECT TO PREVIEW PAGE
        window.location.href = '/list-preview/';
      })
      .fail((response) => {
        console.error('Sorry ... Ajax failed');
        console.error(response);
      })
      .always(() => {
        console.info('Ajax finished as always...');
      });

    // RESET FORM (NOT NECESSARY CUZ NOW THERE IS A PAGE REFRESH)
    this.selectizeMain.clear();
    this.selectizePrimo.clear();
    this.selectizeSecondo.clear();
    this.selectizeTerzo.clear();
    $('#lister-name').val('');
    $('#lister-address').val('');
    $('#lister-description').val();
  };
}

export default ListInsertEventsAjax;
