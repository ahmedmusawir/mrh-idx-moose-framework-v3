// TEST CODE HERE
import InsertPost from './_modules/_test/insertPost';
import TestGetJson from './_modules/_test/testGetJson';
import TestJsToPhp from './_modules/_test/TestJsToPhp';
import DatePickerTest from './_modules/_test/DatePickerTest';
import DateTimePickerTest from './_modules/_test/DateTimePickerTest';
import FormValdationTest from './_modules/_test/formVaidationTest';
import IndexedDbTest from './_modules/_test/indexedDbTest';
// PRODUCTION CODE HERE
import SelflistSearch from './_modules/SelflistSearch';
import SelflistCatSearch from './_modules/SelflistCatSearch';
import SelflistPostSearch from './_modules/SelflistPostSearch';
import SelflistCatSearchJson from './_modules/SelflistCatSearchJson';
// LIST INSERT RELATED
import CatSelectDataParent from './_modules/selflist-crud/CatSelectDataParent';
import CatSelectionEvents from './_modules/selflist-crud/CatSelectionEvents';
import ListInsertUiDataParent from './_modules/selflist-crud/ListInsertUiDataParent';
import ListInsertValidationEvents from './_modules/selflist-crud/ListInsertValidationEvents';
import ListInsertEventsAjax from './_modules/selflist-crud/ListInsertEventsAjax';
import ListPreviewEvents from './_modules/selflist-crud/ListPreviewEvents';
// LIST PAYMENT RELATED
import PaymentSummaryDateTimePicker from './_modules/selfList-payments/PaymentSummaryDateTimePicker';
import PaymentSummaryUiEvents from './_modules/selfList-payments/PaymentSummaryUiEvents';
import PaymentSubmitAjaxEvents from './_modules/selfList-payments/PaymentSubmitAjaxEvent';
// LIST PUBLISH RELATED
import PublishListSummaryDisplay from './_modules/selfList-payments/PublishListSummaryDisplay';
// CATEGORY INSERT UI RELATED
import CatInsertUiParent from './_modules/selflist-crud/cat-curd/CatInsertUiParent';
import MainCatInsertUi from './_modules/selflist-crud/cat-curd/MainCatInsertUi';
import PrimoCatInsertUi from './_modules/selflist-crud/cat-curd/PrimoCatInsertUi';
import SecondoCatInsertUi from './_modules/selflist-crud/cat-curd/SecondoCatInsertUi';
import TerzoCatInsertUi from './_modules/selflist-crud/cat-curd/TerzoCatInsertUi';
// CATEGORY FORM VALIDATION RELATED
import CatFormValidationParent from './_modules/selflist-crud/cat-curd/CatFormValidationParent';
import MainCatFormValidation from './_modules/selflist-crud/cat-curd/MainCatFormValidation';
import PrimoCatFormValidation from './_modules/selflist-crud/cat-curd/PrimoCatFormValidation';
import SecondoCatFormValidation from './_modules/selflist-crud/cat-curd/SecondoCatFormValidation';
import TerzoCatFormValidation from './_modules/selflist-crud/cat-curd/TerzoCatFormValidation';
// CATEGORY INSERT EVENT AJAX RELATED
import CatInsertEventAjaxParent from './_modules/selflist-crud/cat-curd/CatInsertEventAjaxParent';
import MainCatInsertEvent from './_modules/selflist-crud/cat-curd/MainCatInsertEvent';
import PrimoCatInsertEvent from './_modules/selflist-crud/cat-curd/PrimoCatInsertEvent';
import SecondoCatInsertEvent from './_modules/selflist-crud/cat-curd/SecondoCatInsertEvent';
import TerzoCatInsertEvent from './_modules/selflist-crud/cat-curd/TerzoCatInsertEvent';
// CITY STATE FILTER RELATED
import CiteStateUiEvents from './_modules/selflist-city-state/CityStateUiEvents';
import CityStateAjaxEvents from './_modules/selflist-city-state/CityStateAjaxEvents';
import CityLoadRestApiEvents from './_modules/selflist-city-state/CityLoadRestApiEvents';
import CiteStateInsertUiEvents from './_modules/selflist-city-state/CityStateInsertUiEvents';
import CityFormValidationEvents from './_modules/selflist-city-state/CityFormValidationEvents';
import CityInsertAjaxEvents from './_modules/selflist-city-state/CityInsertAjaxEvents';

class App {
  constructor() {
    console.info('ES6 Script Initialized!');

    this.runTestCode();

    // // Selflist Search Module
    // new SelflistSearch();
    // // Selflist Category Search Filter - non REST
    // new SelflistCatSearch();
    // // Selflist Post Item Search Filter - non REST
    // new SelflistPostSearch();
    // // Selflist List Category Search from JSON file
    // new SelflistCatSearchJson();

    // // SELFLIST LIST INSERT PAGE CAT SELECT DROPDOWNS
    // new CatSelectDataParent();
    // new CatSelectionEvents();

    // /**
    //  * LIST INSERT RELATED CLASSES
    //  */
    // // LIST INSERT PAGE MAIN POST INSERT EVENTS (a child of ListInsertUiEvents)
    // new ListInsertEventsAjax();
    // // LIST INSERT VALIDATION EVENTS (a child of CatSelectionEvents)
    // new ListInsertValidationEvents();
    // // LIST INSERT UI DATA EVENTS (a child of CatSelectionEvents)
    // new ListInsertUiDataParent();
    // // LIST PREVIEW EVENTS
    // new ListPreviewEvents();

    // /**
    //  * LIST PAYMENT & PUBLISH RELATED CLASSES
    //  */
    // // LIST PAYMENT SUMMARY PAGE
    // new PaymentSummaryDateTimePicker();
    // new PaymentSummaryUiEvents();
    // new PaymentSubmitAjaxEvents();
    // // LIST PUBLISH SUMMARY PAGE
    // new PublishListSummaryDisplay();

    // /**
    //  * CATEGORY RELATED CLASSES
    //  */
    // // Category UI/UX
    // new CatInsertUiParent();
    // new MainCatInsertUi();
    // new PrimoCatInsertUi();
    // new SecondoCatInsertUi();
    // new TerzoCatInsertUi();

    // // Category Form Validation
    // new CatFormValidationParent();
    // new MainCatFormValidation();
    // new PrimoCatFormValidation();
    // new SecondoCatFormValidation();
    // new TerzoCatFormValidation();

    // // Category Insert Ajax
    // new CatInsertEventAjaxParent();
    // new MainCatInsertEvent();
    // new PrimoCatInsertEvent();
    // new SecondoCatInsertEvent();
    // new TerzoCatInsertEvent();

    // // City State Related
    // new CiteStateUiEvents();
    // new CityStateAjaxEvents();
    // new CityLoadRestApiEvents();
    // new CiteStateInsertUiEvents();
    // new CityFormValidationEvents();
    // new CityInsertAjaxEvents();
  }

  runTestCode = () => {
    // new IndexedDbTest();
    // new InsertPost();
    // new TestGetJson();
    // new FormValdationTest();
    // new DatePickerTest();
    // new TestJsToPhp();
    // new DateTimePickerTest();
  };
}

const app = new App();
