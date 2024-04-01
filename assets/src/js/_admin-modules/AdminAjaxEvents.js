import $ from 'jquery';

class AdminAjaxEvents {
  constructor() {
    // this.init();
    // COLLECTING AJAX INFO
    this.ajaxUrl = selflistAdminData.ajax_url;
    this.usersListAjaxFunction = 'admin_list_users_ajax';
    this.usersPointAddAjaxFunction = 'admin_users_points_add_ajax';
    // ELEMENTS
    this.userListResults = $('#user-list-box');
    this.userPointsAddButton = $('#selflist-add-user-points-button');
    this.userPointsInput = $('#selflist-user-points');
    // USER IDS ARRAY
    this.userIds = [];
    this.setEvents();
  }

  init = () => {
    console.log('Admin Ajax ...');
  };

  setEvents = () => {
    this.userPointsAddButton.on('click', this.AddUserPointsAjax);
  };

  listUsersAjax = () => {
    console.log('Ran the Ajax ...');
    console.log(this.userSearchText);

    // AJAX FUNCTION
    $.ajax({
      url: this.ajaxUrl,
      type: 'post',
      data: {
        action: this.usersListAjaxFunction,
        searchText: this.userSearchText,
      },
    })
      .done((res) => {
        // console.log(res);
        this.userListResults.append(res);
        this.addSelectEvents();
      })
      .fail(() => {
        console.log('Ajax Failed! In ' + this.usersListAjaxFunction);
      })
      .always(() => {
        // console.log('Ajax Dynamic Loaction Filter Complete');
      });
  };

  addSelectEvents = () => {
    this.userCheckBox = $('.user-checkbox');
    this.userCheckBox.on('click', this.selectUsers);
  };

  selectUsers = (e) => {
    const selectedUser = e.target.checked;
    console.log(selectedUser);
    const selectedUserId = e.target.dataset.userid;
    console.log(selectedUserId);

    // CHECKING FOR CHECKBOX CHECKED
    if (selectedUser == true) {
      this.userIds.push(selectedUserId);
    } else {
      this.userIds.pop(selectedUserId);
    }

    console.log(this.userIds);
  };

  AddUserPointsAjax = () => {
    console.log('Add points clicked');
    // AJAX FUNCTION
    $.ajax({
      url: this.ajaxUrl,
      type: 'post',
      data: {
        action: this.usersPointAddAjaxFunction,
        userIdArray: this.userIds,
        userNewPoints: this.userPointsInput.val(),
      },
    })
      .done((res) => {
        console.log(res);
      })
      .fail(() => {
        console.log('Ajax Failed! In ' + this.usersPointAddAjaxFunction);
      })
      .always(() => {
        // console.log('Ajax Dynamic Loaction Filter Complete');
      });
  };
}

export default AdminAjaxEvents;
