describe('variables and constants and stuff', () => {
    describe('declaring variables', () => {
        it('using let to create a binding', () => {
            let name;

            name = 'Joe';
            expect(name).toBe('Joe');

            name = 11
            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; // Union type

            // name = 'Joe';
            expect(name).toBe('Joe');

            name = 11
            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.1415927;

            const FAVORITE_NUMBERS = [9, 22, 108];

            // FAVORITE_NUMBERS = [];
            FAVORITE_NUMBERS[0] = 10;

            const MOVIE = {
                title: 'The Force Awakens',
                director: 'Abrams'
            };

            // MOVIE = {};
            MOVIE.director = 'Johnson';
        });
        it('var is still there but it stinks and should not be used', () => {

            if (true) {
                var name = 'Fido'; // Don't do this
            }

            expect(name).toBe('Fido');
        });

        describe('strings', () => {
            it('delimiting', () => {
                let first = 'Joe',
                    last = "Schmidt";
                expect("Joe").toBe(first);

                let msg = "She told \"Get Lost!\"";
                let msg2 = 'She told me "Get Lost!"';

                let story = `Chapter 1.
            
It was a drak and stormy night`;
                console.log(story);

                let fullName = `That is ${last}, ${first}`;
                expect(fullName).toBe('That is Schmidt, Joe');
            });
        });
    });

    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12; // number
            let n2 = 1.3; // still a number
            let n3 = 0xff; // still a number, but hex base 16
            let n4 = 0b00101; // still anumber but in binary
            let n5 = 0o744; // octal
            // typescript thing
            const salary = 1_000_000;
        });
    });

    describe('arrays and array literals', () => {
        it('has them', () => {
            // const stuff : (number | string)[] = [12, 13];
            const stuff: Array<number | string> = [12, 13]; // Both create an array that is capable of holding numbers or strings
            stuff[2] = 'tacos';

            expect(stuff[2]).toBe('tacos');

            let food = stuff[2];
            // food.    // Intelisense here is the union of string and number for methods
        });
        describe('tuples', () => {
            it('a brief introduction TS', () => {
                // Very typescript specific
                let warren: [string, string, number, string];   // Array where the first element is a string, second is a string, third is a number, fourth is a string
                warren = ['Warren', 'Ellis', 55, 'Musician'];
                // warren = ['Warren', 'Ellis', '55', 'Musician']; // Note the error on the third element when uncommented

                let occupation = warren[3]; // typeof: string
                let age = warren[2];    // typeof: number
            });
            it('an example', () => {
                // first is typed as string, last is typed as string, and the function returns string hence the first:string, last: string, the function returns a tuple containing a string and a number
                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const [fullName, len] = formatName('Han', 'Solo') // called destructuring, the left operand says the right operand returns an array, store the first value in a variable called fullName and the second in a variable called len
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);

                // Can be done with tuple variables as well
                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff; // the destructuring where firstName is create based on element 0 and age is created based on element 2 of the stuff tuple/array, note the empty comma section which says to do nothing with element 1o
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);
            });
        });
    });
});

