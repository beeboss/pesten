const { switchUser, descCard , ckCardPlayable, house, user } = require('./pesten');

// ---- test the tester -- no deps on code ----
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


// -----------
test('should output "schoppen aas"', () => {
    const card1 = descCard('c1');
    expect(card1).toBe("schoppen aas");
});


test('should output "joker"', () => {
    const card1 = descCard('c53');
    expect(card1).toBe("joker");
});

/* park ff
//------------
test('[housecards] should output "c1"', () => {
    const cNumber = house[0];
    expect(cNumber).toBe("c1");
    });
//------------
test('[ckCardPlayable] should output 1 #without quotes', () => {
    const cReturnValueCCP = ckCardPlayable();
    expect(cReturnValueCCP).toBe(1);
});
//------------
test('[igorThink] should output 1 #without quotes', () => {
    const cReturnValueCCP = ckCardPlayable();
    expect(cReturnValueCCP).toBe(1);
});
*/
