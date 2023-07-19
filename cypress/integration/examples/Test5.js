/// <reference types="Cypress" /> 



describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert', (str) => {
        //windows:alert da trigeruje event alerta 
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        //da uporedi text sa alerta
        })
        cy.on('window:confirm', (str) => {
        //isto sve samo za confirm alert
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        //uzmes selektor od buttona koji te vodi na drugi tab, invoke-ujes JQuery metodu 'removeAttribute' da bi uklonio TARGET iz html-a jer zbog njega kada kliknes se prebacis na derugi tab a bez njega otvara u istom prozoru, tako mora u Cypressu
        cy.url().should('include', 'https://www.qaclickacademy.com/')
        //provera da li se nalazis na tom tabu
        cy.go('back')
        //klikne na stericu u browseru da se vrati nazad
    })

})