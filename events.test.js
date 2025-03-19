const EventEmitter = require('events');

describe('Book Lending System', () => {
  let eventEmitter;

  beforeEach(() => {
    eventEmitter = new EventEmitter();
  });

  test('should emit book added event', (done) => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author'
    };

    eventEmitter.on('bookAdded', (data) => {
      expect(data).toEqual(book);
      done();
    });

    eventEmitter.emit('bookAdded', book);
  });

  test('should emit book borrowed event', (done) => {
    const borrowData = {
      bookId: '1',
      userId: 'user1'
    };

    eventEmitter.on('bookBorrowed', (data) => {
      expect(data).toEqual(borrowData);
      done();
    });

    eventEmitter.emit('bookBorrowed', borrowData);
  });
});