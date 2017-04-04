/**
 * Single linked list 
 */

function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
    size: function () {
        return this._length;
    },

    add: function (data) {
        // 创建一个新node
        var node = {
            data: data,
            next: null
        };
        // 用于遍历结构
        var current;

        if (this._head === null) { // 特殊情况：链表为空
            this._head = node;
        } else {
            current = this._head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this._length++;
    },

    /**
     * 根据index从链表中获取一个值
     * @param { Number } index 想要获取的元素的index
     */
    item: function (index) {
        if (index > -1 && index < this._length) {
            var current = this._head;
            var i = 0;

            while (i++ < index) {
                current = current.next;
            }

            return current.data;
        } else {
            return null;
        }
    },

    /**
     * 根据index从链表中删除一个node
     */
    remove: function (index) {
        if (index > -1 && index < this._length) {
            var current = this._head,
                previous,
                i = 0;

            if (index === 0) { // 特殊情况：移除第一个node
                this._head = current.next;
            } else {
                while (i++ < index) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            this._length--;
            return current.data;

        } else {
            return null;
        }
    },

    /**
     * 将链表转换成一个数组
     * @return {Array} 一个包含了链表中的各元素数据的数组
     */
    toArray: function () {
        var result = [];
        var current = this._head;

        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    },

    /**
     * 将链表用字符串表示出来
     */
    toString: function () {
        return this.toArray().toString();
    },
}


module.exports = LinkedList;