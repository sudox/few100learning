describe('functions', () => {
    describe('syntax for creating them', () => {

        it('declaring them', () => {
            // Named Functions, when you name a function you can forward reference it in scope, that is why the next line runs
            expect(add(1, 2)).toBe(3);
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(3, 3)).toBe(6);

            // Anonymous Functions, cannot forward reference them like named functions, moving line 18/22 up would cause them to throw a compiler error
            // -- an anonymous function that I immediately invoke
            expect((function (a, b) { return a / b; })(10, 5)).toBe(2);

            // setting an anonymous function expression to be variable that can be invoked like a named function
            const multiply = function (a: number, b: number) { return a * b; };
            expect(multiply(3, 3)).toBe(9);

            // creates a function using a lambda, if the only thing in the body of the function is an expression you don't need the return function
            const divide = (a: number, b: number) => a / b;
            expect(divide(10, 2)).toBe(5);

            // the body of the function is more than just an expression, the return keyword is required
            const logIt = (msg: string) => {
                msg = msg.toUpperCase();
                console.log(msg);
                return true;
            }
            logIt('Fun with Functions!');
        });
    });
    describe('higher order functions', () => {
        // a higher order function is a function that takes as an argument one or more functions and/or returns a function
        it('first example', () => {

        });
    });
});