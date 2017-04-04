var firstNode = {
    data: 12,
    next: null,
    prev: null
}

var secondNode = {
    data: 99,
    prev: firstNode,
    next: null
};

firstNode.next = secondNode;

function DoublyLinkedList() {
    this._length = 0;
    this._head = null;
    this._tail = null;
}

DoublyLinkedList.prototype = {

    add: function () {
        var node = {
            data: data,
            prev: null,
            next: null
        };

        if (this._length === 0) { // Special case: list is empty
            this._head = node;
            this._tail = node;
        } else {
            // attach to the tail node
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this._length++;
    },

    remove: function (index) {
        if (index > -1 && index < this._length) {
            var current = this._head;
            var i = 0;

            if (index === 0) {
                this._head = current.next;

                if (!this._head) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            // 移除最后一个元素
            } else if (index === this._length - 1) {
                this._tail = this._tail.prev;
                this._tail.next = null;
            } else {
                while (i++ < index) {
                    current = current.next;
                }

                current.prev.next = current.next;
            }

            this._length--;

            return current.data;
        } else {
            return null;
        }
    }
}