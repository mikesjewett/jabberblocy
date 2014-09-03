Template.participantList.helpers({
  participants: function() {
    return Meteor.users.find().fetch();
  }
});
