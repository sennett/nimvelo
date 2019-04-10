const greet = require('./greet')

describe('greet', () => {
    it('orders people correctly', () => {
        var result = greet([{
            name: 'Alex',
            age: 27,
        }, {
            name: 'Bob',
            age: 35,
        }, {
            name: 'Carl',
            age: 17,
        }, {
            name: 'Dave',
            age: 20,
        }, {
            name: 'Emily',
            age: 22,
        }, {
            name: 'Fred',
            age: 19,
        }], 20)

        expect(result).toBe('Hello Dave, Emily, Alex, and Bob!')
    })

    describe('handling one person', () => {
        it('above min age', () => {
            var result = greet([{
                name: 'Alex',
                age: 27,
            }], 20)

            expect(result).toBe('Hello Alex!')
        })
    })

    describe('handling two people', () => {
        it('above min age', () => {
            var result = greet([{
                name: 'Alex',
                age: 27,
            }, {
                name: 'Dave',
                age: 20,
            }], 20)

            expect(result).toBe('Hello Dave, and Alex!')
        })

        it('one below min age', () => {
            var result = greet([{
                name: 'Alex',
                age: 27,
            }, {
                name: 'Dave',
                age: 19,
            }], 20)

            expect(result).toBe('Hello Alex!')
        })
    })

    describe('nobody to greet', () => {
        it('errors with no people', () => {
            const test = () => {
                greet([], 20)
            }

            expect(test).toThrow('Nobody to greet :(')
        })

        it('errors with no people over min age', () => {
            const test = () => {
                greet([{
                    name: 'Alex',
                    age: 19,
                }, {
                    name: 'Dave',
                    age: 19,
                }], 20)
            }

            expect(test).toThrow('Nobody to greet :(')
        })
    })
})
