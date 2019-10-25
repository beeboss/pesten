// === pesten.test.js ===
const { descCard , switchUser , ckCardPlayable , house, newhouse, user } = require('./pesten');


// ---- test the tester -- no deps on code ----
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


//------------
test('ckCardPlayable: should output a 1', () => {
    const cReturnValueCCP = ckCardPlayable();
    expect(cReturnValueCCP).toBe(1);
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


//------------
test('[housecards] should output "c1"', () => {
    const cNumber = house[0];
    expect(cNumber).toBe("c1");
});

///========

//    buildDeck();
test('[newhouse array] should output "c0"', () => {
    const tCard = newhouse[0];
    expect(tCard).toBe("c0");
});

test('[newhouse array] should output "c49"', () => {

    const tCard = newhouse[49];
    expect(tCard).toBe("c49");
});
