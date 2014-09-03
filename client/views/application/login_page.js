Template.loginPage.events({
  'submit .login-form': function(e) {
    e.preventDefault();

    // store username, password, and the new user checkbox in variables
    var un = $(e.target).find('[name="username"]');
    var pw = $(e.target).find('[name="password"]');
    var nu = $(e.target).find('[name="newuser"]');

    // define a function that tells us whether there's input
    var fieldsPopulated = function() {
      return un.val() !== '' && pw.val() !== '';
    };

    // if the new user checkbox isn't selected
    if (fieldsPopulated() && !nu.is(':checked')) {
      Meteor.loginWithPassword(un, pw, function(err) {
          // clear our inputs
          un.val('');
          un.val('');
        }
      });
    // and if it is...
    } else if (fieldsPopulated() && nu.is(':checked')) {
      Accounts.createUser({
        username: un.val(),
        password: pw.val()
      });
    } else {
      alert("There was an error logging you in");
    }
  }
});
