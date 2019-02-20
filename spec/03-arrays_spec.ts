import { roundToTwoPlaces } from "./utils";

describe('destructuring', () => {
    it('destructiring arrays', () => {
        const friends = ['sean', 'billy', 'david', 'sarah', 'mo'];

        const f1 = friends[0];
        const f2 = friends[1];
        expect(f1).toBe('sean');
        expect(f2).toBe('billy');

        const [d1, d2] = friends;
        expect(d1).toBe('sean');
        expect(d2).toBe('billy');

        const [e1, , e2, ...rest] = friends;
        expect(e1).toBe('sean');
        expect(e2).toBe('david');
        expect(rest).toEqual(['sarah', 'mo']);
    });
    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        };

        const { number1, number2 } = friends;
        expect(number1).toBe('sean');
        expect(number2).toBe('billy');

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe('sarah');
        expect(f2).toBe('mo');

        const { number1: n1, ...other } = friends;
        expect(n1).toBe('sean');
        expect(other).toEqual({
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        });
    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('forEach allows you to look at each member (no new return)', () => {
            numbers.forEach((n) => console.log(n));
        });

        describe('methods that produce a new array', () => {
            it('selecting just specific stuff from an array', () => {
                const evens = numbers.filter(n => n % 2 === 0);
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);   // Doesn't modify original array
                expect("").toBeFalsy();
                expect(" ").toBeTruthy();
            });
            it('map lets you transform each element of the source array', () => {
                // if there's a place you want to go, it'll get you there you know. it's the map. it's the map. it's the map.

                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });
            it('a quick practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];


                const answer = ['Toyota Prius', 'Ford Explorer'];

                // find all the vehicles with < 100_000, but just give me the make and model.

                const result = vehicles // all of the vehicles
                    .filter(v => v.mileage < 100_000)   // just the vehicles objects with < 100,000
                    .map(v => v.makeAndModel);  // An Array of the strings that are just the make and model of those

                expect(result).toEqual(answer);
            });
            it('another example', () => {
                interface Product {
                    id: number;
                    description: string;
                    cost: number;
                }

                const products: Product[] = [
                    { id: 1, description: 'Eggs', cost: 1.99 },
                    { id: 2, description: 'Beer', cost: 7.99 },
                    { id: 3, description: 'Chips', cost: 2.99 },
                ];

                // our price markup is 30%.
                // for each product create an array of objects that look like this:
                interface SaleItem {
                    id: number;
                    description: string;
                    price: number;
                }

                // but only if the price is > $5.00 
                const salesItems: SaleItem[] = products
                    .map(p => { return { id: p.id, description: p.description, price: roundToTwoPlaces(p.cost) } })
                    .filter(p => p.price > 5.0);
                expect(salesItems).toEqual([{ id: 2, description: 'Beer', price: 10.39 }]);
            });
        });
        describe('methods that produce a single value (scalar)', () => {
            it('has methods to check the membership of an array', () => {
                expect(numbers.some(n => n > 8)).toBe(true);
                expect(numbers.every(n => n < 10)).toBe(true);
            });
            it('has reduce', () => {
                expect(numbers.reduce((p, c) => p + c)).toBe(45);
                // second argument, intial value
                expect(numbers.reduce((p, c) => p + c, 100)).toBe(145);
            });
            it('example', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];

                // I want the make and model of the car with the highest mileage (don't worry about ties. that can be homework)


                interface TempResult {
                    makeAndModel: string;
                    mileage: number;
                }
                const initialState: TempResult = {
                    makeAndModel: null,
                    mileage: -1
                };
                const answer = vehicles
                    .reduce((state, next) => {
                        if (next.mileage > state.mileage) {
                            return {
                                makeAndModel: next.makeAndModel,
                                mileage: next.mileage
                            }
                        } else {
                            return state;
                        }

                    }, initialState).makeAndModel;

                expect(answer).toBe('Chevy Tahoe');
            });
            it('ok one more example', () => {

                const friends = ['sean', 'billy', 'stacey', 'david'];

                interface Answer {
                    list: string;
                    numberOfFriends: number;
                }
                const initialState: Answer = {
                    list: '',
                    numberOfFriends: 0
                }
                const answer = friends
                    .map(f => f.toUpperCase())
                    .reduce((state, next) => {
                        return {
                            list: state.list ? state.list + ' ' + next : next,
                            numberOfFriends: state.numberOfFriends + 1
                        }
                    }, initialState)

                expect(answer.list).toBe('SEAN BILLY STACEY DAVID');
                expect(answer.numberOfFriends).toBe(4);
            });
            it('final example and I mean it', () => {

                interface Action {
                    type: string;
                }

                const stuffThatHappened: Action[] = [
                    { type: 'ADDED' },
                    { type: 'ADDED' },
                    { type: 'SUBTRACTED' },
                    { type: 'ADDED' },
                ];

                const initialState = 0;

                const answer = stuffThatHappened.reduce((state, next) => {
                    switch (next.type) {
                        case 'ADDED': {
                            return state + 1;
                        }
                        case 'SUBTRACTED': {
                            return state - 1;
                        }
                    }
                }, initialState)

                expect(answer).toBe(2);
            });
        });
    });
});