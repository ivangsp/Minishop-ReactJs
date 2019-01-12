export const filterProductsBy = (item, products) => {
  // filter by country name
  if (item.country !== undefined && item.instock === undefined) {
    return products.filter(el => {
      return el.store === item.country;
    });

    // filter by stock
  } else if (item.instock !== undefined && item.country === undefined) {
    return products.filter(el => {
      return el.instock === item.instock;
    });

    // filter by both stock and country
  } else if (item.instock !== undefined && item.country !== undefined) {
    return products.filter(el => {
      return el.store === item.country && el.instock === item.instock;
    });

    // do not filter
  } else {
    return products;
  }
};

export const updateTotalAmount = basket => {
  let i;
  let amount = 0;
  for (i = 0; i < basket.length; i++) {
    amount = amount + basket[i].qty * basket[i].price;
  }
  return amount;
};

export const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].id === obj.id) {
      return true;
    }
  }

  return false;
};
