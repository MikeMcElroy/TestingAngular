var Notifier = function() {
  // #1 - use DI, inject things
  var backend = new Backend(app.getConfig('backend_url'), app.getConfig('backend_port'));
  var queue = Notifier.queue;

  this.send = function(user, message)  {
    // this sucks - Demeter
    var email = user.getDetails().email;

    // encode message
    // extract to method to test it separately
    var msg = 'secret:' + message;

    // #2 - mutating global state
    queue.push([email, msg]);

    if (queue.length === app.getConfig('notifier_batch_limit')) {
      // send it to the backend server
      backend.sendBatch(queue);
    }
  };
};

Notifier.queue = [];

var Backend = function(url, port) {
  // this guy is very expensive and talks to the server a lot
  throw new Error('I am sending a request to server fucka!');
};


var app = {
  _cfg: {
    'notifier_batch_limit': 2
  },
  setConfig: function(key, value) {
    this._cfg[key] = value;
  },
  getConfig: function(key) {
    return this._cfg[key];
  }
};
