const { switchUser, descCard , ckCardPlayable, house, user } = require('./pesten');



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
