import { fireEvent, render, screen } from '@testing-library/react';
import Home from './index';

// Vérifie si une liste de champs est affichée dans le formulaire
describe('When Form is created', () => {
    it('a list of fields card is displayed', async () => {
        render(<Home />);
        await screen.findByText('Email');
        await screen.findByText('Nom');
        await screen.findByText('Prénom');
        await screen.findByText('Personel / Entreprise');
    });

    // Vérifie si le message de succès est affiché après la soumission du formulaire
    describe('and a click is triggered on the submit button', () => {
        it('the success message is displayed', async () => {
            render(<Home />);
            fireEvent(
                await screen.findByText('Envoyer'),
                new MouseEvent('click', {
                    cancelable: true,
                    bubbles: true,
                })
            );
            await screen.findByText('En cours');
            await screen.findByText('Message envoyé !');
        });
    });
});

// Vérifie si la section Nos services est rendue correctement
describe('When a page is created', () => {
    it("renders 'Nos services' section", () => {
        render(<Home />);
        expect(screen.getByText('Nous organisons des événements sur mesure partout dans le monde')).toBeInTheDocument();
    });

    // Vérifie si la section Nos réalisations est rendu correctement
    it("renders 'Nos réalisations' section", () => {
        render(<Home />);
        screen.findByText('Catégories');
    });

    // Vérifie si la section Notre équipe est rendue correctement
    it("renders 'Notre équipe' section", () => {
        render(<Home />);
        expect(screen.getByText('Une équipe d’experts dédiés à l’ogranisation de vos événements')).toBeInTheDocument();
    });

    // Vérifie si les éléments Contactez nous et Notre dernière prestation sont présents dans le footer
    it("renders 'Contactez nous' and 'Notre dernière préstation' ", () => {
        render(<Home />);

        const footer = screen.getByText('Contactez-nous').closest('footer');
        expect(footer).toBeInTheDocument();
        expect(screen.getByText('contact@77events.com')).toBeInTheDocument();
        expect(screen.getByText('Notre dernière prestation')).toBeInTheDocument();
    });
});
