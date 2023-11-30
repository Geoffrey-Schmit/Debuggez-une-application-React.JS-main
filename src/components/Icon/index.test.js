import { render, screen } from '@testing-library/react';
import md5 from 'md5';
import Icon from '.';

describe('Icon component', () => {
    // Vérifie si l'icone Twitch contient la valeur de hachage de chemin
    describe('When a icon is created with name twitch', () => {
        it('the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a', () => {
            render(<Icon name="twitch" />);
            expect(md5(screen.getByTestId('twitch-icon').getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a');
        });
    });

    // Vérifie si l'icone Facebook contient la valeur de hachage de chemin
    describe('When a icon is created with name facebook', () => {
        it('the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853', () => {
            render(<Icon name="facebook" />);
            expect(md5(screen.getByTestId('facebook-icon').getAttribute('d'))).toEqual('bbea4c9e40773b969fdb6e406059f853');
        });
    });

    // Vérifie si l'icone Twitter contient la valeur de hachage de chemin
    describe('When a icon is created with name twitter', () => {
        it('the icon contain this path hash value 82f5be4a5c07199cb75dacec50b90b2a', () => {
            render(<Icon name="twitter" />);
            expect(md5(screen.getByTestId('twitter-icon').getAttribute('d'))).toEqual('82f5be4a5c07199cb75dacec50b90b2a');
        });
    });

    // Vérifie si l'icone Youtube contient la valeur de hachage de chemin
    describe('When a icon is created with name youtube', () => {
        it('the icon contain this path hash value 43342876c2fc40e5b2afe621443ff95b', () => {
            render(<Icon name="youtube" />);
            expect(md5(screen.getByTestId('youtube-icon').getAttribute('d'))).toEqual('43342876c2fc40e5b2afe621443ff95b');
        });
    });
});
