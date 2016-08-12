import each from 'lodash/each';

export const parseFirebaseObject = (data) => {
  const itemsList = [];
  each(data, (itemValue, itemId) => {
    const obj = {
      id: itemId,
    };
    each(itemValue, (value, key) => {
      obj[key] = value;
    });
    itemsList.push(obj);
  });
  return itemsList;
};

export const parseSimpleFirebaseObject = (data) => {
  const itemsList = [];
  each(data, (itemValue, itemId) => {
    const obj = {
      id: itemId,
      name: itemValue,
    };
    itemsList.push(obj);
  });
  return itemsList;
};