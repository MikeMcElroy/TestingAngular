describe('Notifier.send', function() {
  it('should encode the message', function() {
    var lastSentMessage = null;
    // in Java, it would be even more complicated (almost impossible)
    // #1 - solves this, the responsibility is not in Notifier anymore
    window.Backend = function(url, port) {
      this.sendBatch = function(listOfMessages) {
        lastSentMessage = listOfMessages[0][1];
      };
    };

    var n = new Notifier();

    var userDetails = {
      email: 'some@domain.com'
    };
    var user = {
      getDetails: function() {
        return userDetails;
      }
    };

    // disable the batching
    app.setConfig('notifier_batch_limit', 1);



    // can't pass user = null
    n.send(user, 'hello');

    expect(lastSentMessage).toBe('secret:hello');
  });


  xit('should batch messages', function() {
    var backendInstance = null;
    // in Java, it would be even more complicated (almost impossible)
    // #1 - solves this, the responsibility is not in Notifier anymore
    window.Backend = function(url, port) {
      backendInstance = this;
      this.sendBatch = jasmine.createSpy('sendBatch');
    };

    var n = new Notifier();

    var userDetails = {
      email: 'some@domain.com'
    };
    var user = {
      getDetails: function() {
        return userDetails;
      }
    };

    // we have to set up global state, because previous test changed the default config
    app.setConfig('notifier_batch_limit', 2);

    // we need to clean up the global state
    // Notifier.queue.length = 0;

    n.send(user, 'hello');
    expect(backendInstance.sendBatch).not.toHaveBeenCalled();

    n.send(user, 'hello');
    expect(backendInstance.sendBatch).toHaveBeenCalled();

  });
});
