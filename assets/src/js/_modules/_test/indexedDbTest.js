import $ from 'jquery';
import { get, set } from 'idb-keyval';

class IndexedDbTest {
  constructor() {
    // this.init();
    this.flagKey;
    this.listId;
    this.flagBtn = $('.flag-btn');
    this.flagStatus();
    this.setEvents();
  }

  flagStatus = () => {
    // console.log(this.flagBtn);
    this.flagBtn.map((indx, btn) => {
      console.log(indx, btn.dataset.postId);
      console.log(indx, btn.dataset.key);
      // FROM INDEX DB
      get(btn.dataset.key)
        .then((data) => {
          // console.info(data.listId);
          if (data) {
            if (data.listId == btn.dataset.postId) {
              btn.classList.add('disabled');
            }
          }
        })
        .catch(console.error);
    });
  };

  setEvents = () => {
    this.flagBtn.on('click', this.flagHandler);
  };

  flagHandler = (e) => {
    this.flagKey = $(e.target).data('key');
    this.listId = $(e.target).data('post-id');

    const flaggedList = {
      listId: this.listId,
    };

    // console.info('LIST OBJ: ', flaggedList);

    set(this.flagKey, flaggedList)
      .then(() => {
        console.log('saved: ', this.flagKey);
      })
      .catch(console.error);

    this.disableFlagging(e.target);
  };

  disableFlagging = (clickedFlag) => {
    console.log('DISABLE: ', this.flagKey);

    const flaggedListId = clickedFlag.dataset.postId;
    console.log('FLAGGED LIST ID: ', flaggedListId);

    get(this.flagKey)
      .then((data) => {
        // console.info(data.listId);
        if (data.listId == flaggedListId) {
          clickedFlag.classList.add('disabled');
        }
      })
      .catch(console.error);
  };

  init = () => {
    console.log('Index db test ...');
  };
}

export default IndexedDbTest;
