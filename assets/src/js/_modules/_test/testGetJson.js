import $, { data } from 'jquery';

class TestGetJson {
  constructor() {
    // this.init();
    // this.catData = this.thePromise.then(data => { console.log(data.mainCat); return data.mainCat; });
    // console.log(this.thePromise);
    this.url = 'http://selflist-dev.local/wp-content/uploads/categories.json';
    this.thePromise = this.getData(this.url);
    // this.showData(this.thePromise);
    this.makeMainCatList(this.thePromise);
  }

  init = () => {
    console.log('Test Get Json ...');
  };

  async getData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;

    } catch (e) {
      console.log(e);
    }
  }

  showData = (thePromise) => {
    // console.log(thePromise);
    thePromise.then((d) => {
      // console.log(cat.mainCat);
      let data = d.mainCat;
      // console.log(data);
      data.map(catData => {
        console.log(catData.mainCatName, catData.mainCatId);
      })
    });
  }
  makeMainCatList = (thePromise) => {
    // console.log(thePromise);
    thePromise.then((d) => {
      let data = d.mainCat;
      // console.log(data);
      const selected = data.filter(cat => cat.mainCatId == '4');
      console.log(selected);
      console.log(selected[0].mainCatName);
      console.log(selected[0][0].primo);
      // console.log(selected[0][0]);
      const secondo = selected[0][0].secondo.filter(sec => sec.parentId == '58');
      console.log(secondo);
      const terzo = selected[0][0].terzo.filter(sec => sec.parentId == '61');
      console.log(terzo);
    });
  }

  setEvents = () => {
    // this.button.on('click', this.clickHandler);
  };

  clickHandler() {
    // console.log('clicked up from Sample Module ...');
    // const page = $(this).data('page');
    // console.log(page);
  }
}

export default TestGetJson;
