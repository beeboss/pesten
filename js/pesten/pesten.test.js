const { switchUser, descCard } = require('./pesten');

// -----------
test('should output "igor" or "you"',  () => {
    const text = switchUser("you");
    expect(text).toBe("igor");

    const text2 = switchUser("igor");
    expect(text2).toBe("you");
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
test('[housecards] should output "c0"', () => {
    const cNumber = house[0];
    expect(cNumber).toBe("c0");
    });
