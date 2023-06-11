/// <reference types="Cypress" /> 

//ovo iznad znaci da kada kucas code da ce da ti nudi sve Cypress metode u dropdown-u

describe('My first test suite', function () {

    it('My first test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //selektor parent, nadji unutar parenta sve product child slelektore, izvuci zeljeni selektor preko indexa, contains - nadji selektor sa tim textom i klikni da to dugme sa tim textom
        cy.get('.products').find('.product').each(($el, index, $list) => {
            //za svaki element odradi loop, ako ima 4 producta, loop ce se odraditi 4 puta, svkai loop produkt pada u $el
            const vegText = $el.find('h4.product-name').text();
            // uhvatili smo selektor producta sa textom od product-a
            if (vegText.includes('Cashews')) {
                //ako je text od producta jednak Cashews... 
                cy.wrap($el).contains('ADD TO CART').click()
                //onda klikni ADD to Cart button i cy.wrap smo ubacili jer od novije verzije cypressa mora tako inace ne bi radila metoda za click
            }
        })
    })
})