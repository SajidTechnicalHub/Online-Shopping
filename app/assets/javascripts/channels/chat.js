
App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    //alert('connection create');
    console.log("connected to the channel");
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    console.log("disconnected from the channel");
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    var messages = $('#chatbox');
    messages.append(data['message']);
    
  },
});