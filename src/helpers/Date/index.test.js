import { getMonth } from '.';

describe('Date helper', () => {
    describe('When getMonth is called', () => {
        // Vérifie si la fonction retourne Janvier pour la date 2022 01 01
        it('the function return janvier for 2022-01-01 as date', () => {
            const result = getMonth(new Date('2022-01-01'));
            expect(result).toBe('janvier');
        });

        // Vérifie si la fonction retourne Juillet pour la date 2022 07 08
        it('the function return juillet for 2022-07-08 as date', () => {
            const result = getMonth(new Date('2022-07-08'));
            expect(result).toBe('juillet');
        });

        // Vérifie si la fonction retourne Mars pour la date 2022 03 01
        it('the function return mars for 2022-03-01 as date', () => {
            const result = getMonth(new Date('2022-03-01'));
            expect(result).toBe('mars');
        });
    });
});
