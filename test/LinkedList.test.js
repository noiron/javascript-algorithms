var linkedList = require('../src/LinkedList');
var expect = require('chai').expect;

describe('Add items to linked list', function () {

    describe('Add a single item to linked list', function () {
        var list = new linkedList();
        list.add('hi')
        it('Length should be 1', function () {
            expect(list._length).to.be.equal(1);
        })
        it('First item should be hi', function () {
            expect(list._head.data).to.be.equal('hi');
        })
        it('Second item should be null', function () {
            expect(list._head.next).to.be.null;
        })
    })

    describe('Add multiple items to linked list', function () {
        var list = new linkedList();
        list.add('hello');
        list.add('world');
        list.add('good bye');

        it('Length should be 3', function () {
            expect(list._length).to.be.equal(3);
        })
        it('First item should be hello', function () {
            expect(list._head.data).to.be.equal('hello');
        })
        it('Second item should be good bye', function () {
            expect(list._head.next.next.data).to.be.equal('good bye');
        })
        it('Forth item should be null', function () {
            expect(list._head.next.next.next).to.be.equal(null);
        })
    })
});

describe('Retrieve values from linked list', function () {
    var list = new linkedList();
    list.add('hello');
    list.add('world');
    list.add('good bye');

    it('First item should be "hello"', function () {
        expect(list.item(0)).to.be.equal('hello');
    });

    it('Second item should be "world"', function () {
        expect(list.item(1)).to.be.equal('world');
    });

    it('Third item should be "good bye"', function () {
        expect(list.item(2)).to.be.equal('good bye');
    });

    it("Invalid items should return null.", function () {
        expect(list.item(5)).to.be.null;
        expect(list.item(4)).to.be.null;
    });
})

describe('Remove values from linked list', function () {

    describe('Remove first item', function () {
        var list = new linkedList();
        list.add('hello');
        list.add('world');
        list.add('good bye');
        var value = list.remove(0);

        it('Removed item should be "hello"', function () {
            expect(value).to.be.equal('hello');
        });

        it('There should only be two items left', function () {
            expect(list.size()).to.be.equal(2);
        });

        it('First item should now be "world"', function () {
            expect(list.item(0)).to.be.equal('world');
        });

        it('Last item should now be "good bye"', function () {
            expect(list.item(1)).to.be.equal('good bye');
        });

        it('Item in position 2 should be null', function () {
            expect(list.item(2)).to.be.null;
        });
    });

    describe('Remove middle item', function () {
        var list = new linkedList();
        list.add('hello');
        list.add('world');
        list.add('good bye');
        var value = list.remove(1);

        it('Removed item should be "world"', function () {
            expect(value).to.be.equal("world");
        });
        it('There should only be two items left', function () {
            expect(list.size()).to.be.equal(2);
        });
        it('First item should now be "hello"', function () {
            expect(list.item(0)).to.be.equal('hello');
        });
        it('Last item should now be "good bye"', function () {
            expect(list.item(1)).to.be.equal('good bye');
        });
        it('Item in position 2 should be null', function () {
            expect(list.item(2)).to.be.equal(null);
        });
    });

    describe('Remove last item', function () {
        var list = new linkedList();
        list.add('hello');
        list.add('world');
        list.add('good bye');
        var value = list.remove(2);

        it('Removed item should be "good bye"', function () {
            expect(value).to.be.equal("good bye");
        });
        it('First item should now be "hello"', function () {
            expect(list.item(0)).to.be.equal('hello');
        });
        it('Last item should now be "world"', function () {
            expect(list.item(1)).to.be.equal('world');
        });
        it('Item in position 2 should be null', function () {
            expect(list.item(2)).to.be.null;
        });
    })
});

describe('Convert linked list to an array', function () {

    describe('Convert empty list to array', function () {
        var list = new linkedList();
        var value = list.toArray();
        it('Value should be an array', function () {
            expect(value).to.be.an.instanceOf(Array);
        });
        it('Array should be empty', function () {
            expect(value.length).to.be.equal(0);
        })
    });

    describe('Convert one item list to array', function () {
        var list = new linkedList();
        list.add('hello');
        var value = list.toArray();
        it('Value should be an array', function () {
            expect(value).to.be.an.instanceOf(Array);
        });
        it('Array should have 1 item', function () {
            expect(value.length).to.be.equal(1);
        });
        it('The only item in array should be "hello"', function () {
            expect(value[0]).to.be.equal('hello');
        })
    });

    describe('Convert two item list to array', function () {
        var list = new linkedList();
        list.add('hello');
        list.add('world');
        var value = list.toArray();
        it('Value should be an array', function () {
            expect(value).to.be.an.instanceOf(Array);
        });
        it('Array should have 2 item', function () {
            expect(value.length).to.be.equal(2);
        });
        it('The first item should be "hello"', function () {
            expect(value[0]).to.be.equal('hello');
        });
        it('The second item should be "world"', function () {
            expect(value[1]).to.be.equal('world');
        });
    });
});

