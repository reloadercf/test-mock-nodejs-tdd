describe('Prueba', () => {
    describe('suma', () => {
        it('suma 2 numeros', () => {
            let suma = (a, b) => {
                return a + b
            }
            expect(suma(1, 3)).toEqual(4)
        })
    })

})