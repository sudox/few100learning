describe('Writing a basic spec', () => {
    it('should be easy', () => {
        // Given
        let firstName = 'Boba',
            lastName = 'Fett';
        // When
        let fullname = lastName + ', ' + firstName;

        // Then
        expect(fullname).toBe('Fett, Boba');
    });
});