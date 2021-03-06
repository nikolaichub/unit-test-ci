'use strict';

const assert = require('assert').strict;
const List = require('../lib/list');

describe('Doubly Linked List', () => {
  it('should append element', () => {
    const list = new List();
    list.append('1');
    list.append('2');

    const testLoop = [
      {
        actual: list.tail.data,
        expected: '2',
        err: 'Append method addes wrong data',
      },
      {
        actual: list.length,
        expected: 2,
        err: 'Length is wrong',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should insert element', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('3'); // 1

    list.insert('2', 1);

    const testLoop = [
      {
        actual: list.head.next.data,
        expected: '2',
        err: 'Insert method addes data at wrong position',
      },
      {
        actual: list.length,
        expected: 3,
        err: 'Length is wrong',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should delete element', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('2'); // 1

    list.delete(1);

    const testLoop = [
      {
        actual: list.tail.data,
        expected: '1',
        err: 'Tail element wrong',
      },
      {
        actual: list.length,
        expected: 1,
        err: 'Length is wrong',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should delete all elements by value', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('2');

    list.deleteAll('2');

    const testLoop = [
      {
        actual: list.tail.data,
        expected: '1',
        err: 'Tail element is wrong',
      },
      {
        actual: list.length,
        expected: 1,
        err: 'Length is wrong',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should clone list', () => {
    const list = new List();
    list.append('1');
    list.append('2');

    const cloned = list.clone();
    list.delete(0);

    const testLoop = [
      {
        actual: cloned.tail.data,
        expected: '2',
        err: 'Clone method clones wrong elements',
      },
      {
        actual: cloned.length,
        expected: 2,
        err: 'Primary list changes affect cloned list',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should reverse list', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('3');

    list.reverse();

    const testLoop = ['3', '2', '1'];
    const err = 'Reverse works wrongly';
    let tempNode = list.head;
    let i = 0;
    while (tempNode !== null) {
      const actual = tempNode.data;
      const expected = testLoop[i];
      assert.deepStrictEqual(actual, expected, err);
      tempNode = tempNode.next;
      i += 1;
    }
  });

  it('should clear whole list', () => {
    const list = new List();
    list.append('1');
    list.clear();

    const testLoop = [
      {
        actual: list.head,
        expected: null,
        err: 'Head has next element',
      },
      {
        actual: list.length,
        expected: 0,
        err: 'Length is not zero',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should extend list by another one', () => {
    const list = new List();
    const list2 = new List();
    list.append('1');
    list2.append('2');

    list.extend(list2);

    const testLoop = ['1', '2'];
    const err = 'Extend works wrongly';
    let tempNode = list.head;
    let i = 0;
    while (tempNode !== null) {
      const actual = tempNode.data;
      const expected = testLoop[i];
      assert.deepStrictEqual(actual, expected, err);
      tempNode = tempNode.next;
      i += 1;
    }
  });

  it('should return element by id ', () => {
    const list = new List();
    list.append('1'); // 0

    const actual = list.get(0);
    const expected = '1';
    const err = 'Get method returns wrong data';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should return list length', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('3');

    const actual = list.length;
    const expected = 3;
    const err = 'Lenght getter method works wrongly';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should return first element by value', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('2'); // 1
    list.append('2'); // 2

    const testLoop = [
      {
        actual: list.findFirst('2'),
        expected: 1,
        err: 'Wrong index of existing element',
      },
      {
        actual: list.findFirst('0'),
        expected: -1,
        err: 'Non-existing elements must be of -1 index',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should return last element by value', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('2'); // 1
    list.append('2'); // 2

    const testLoop = [
      {
        actual: list.findLast('2'),
        expected: 2,
        err: 'Wrong index of existing element',
      },
      {
        actual: list.findLast('0'),
        expected: -1,
        err: 'Non-existing elements must be of -1 index',
      },
    ];

    for (const { actual, expected, err } of testLoop) {
      assert.deepStrictEqual(actual, expected, err);
    }
  });
});
