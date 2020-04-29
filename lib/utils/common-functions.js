'use strict';

const moment = require('moment');

function zeroPadWithMaxTwoDigit(number) {
  return ('00' + number).slice(-2);
}

module.exports = {
  removeUndefinedProperties(obj) {
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
  },
  addDaysToDateTime(days, datetime) {
    days = Number(days);
    days = days < 0 ? 0 : days;
    datetime = datetime ? new Date(datetime) : new Date();
    if (isNaN(datetime)) {
      throw new Error('Invalid datetime');
    }

    const newDateTime = new Date(datetime);
    newDateTime.setDate(newDateTime.getDate() + days);

    return newDateTime.getFullYear() + '-' +
      zeroPadWithMaxTwoDigit(newDateTime.getMonth() + 1) + '-' +
      zeroPadWithMaxTwoDigit(newDateTime.getDate()) + ' ' +
      zeroPadWithMaxTwoDigit(newDateTime.getHours()) + ':' +
      zeroPadWithMaxTwoDigit(newDateTime.getMinutes()) + ':' +
      zeroPadWithMaxTwoDigit(newDateTime.getSeconds());
  },
  removeDuplicates(array, options) {
    if (!(array instanceof Array)) {
      throw new Error('Array expected');
    }

    if (array.length === 0) {
      return array;
    }

    options = options || {};
    if (typeof array[0] !== 'object') {
      return array.filter((item, index) => array.indexOf(item) === index);
    }

    if (!options['key']) {
      throw new Error('options.key need to be provided');
    }

    const keyArray = array.map(item => item[options['key']]);
    return array.filter((item, index) => keyArray.indexOf(item[options['key']]) === index);
  },
  convertToNumber(value, options) {
    if (!value) {
      throw new Error('value can not be null/undefined');
    }

    if (!(value instanceof Array)) {
      return Number(value);
    }

    if (value.length === 0) {
      return value;
    }

    options = options || {};
    if (typeof value[0] !== 'object') {
      return value.map((item, index) => Number(item));
    }

    if (!options['key']) {
      throw new Error('options.key need to be provided');
    }

    return value.map(item => {
      item[options['key']] = Number(item[options['key']]);
      return item;
    });
  },
  async sleep(milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  },
  toBoolean(val) {
    return String(val).toLowerCase() === 'true'
  }
};

