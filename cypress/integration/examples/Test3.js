/// <reference types="Cypress" /> 
describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').should('have.value', 'option1')
        // selektor od check box-a, klikni na check box, proveri da li je kliknuo na checkbox, proveri da li je kliknuo na option 1
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //selektor option1 checkbox, klikni da uncheck checkbox, proveri da li je checbox ustavi unchecked
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //selektor od sva tri checkbox-a, klikni check na drugi i treci checkbox

        //Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')
        //'select' je selektor, pa selektuje na option2, pa proveri da li je selektovan option2

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        //autocomplete je selektor, pa napise u search box-u rec 'ind'
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            //selektor koji hvata sve tri opcije, provuce ih kroz loop i kada je item jednak sa 'india', onda klikne na 'india' u dropdown
            if ($e1.text() === "India") {
                cy.wrap($el).click()
            }
            cy.get('#autocomplete').should('have.value', 'India')
            //proveri da je india kliknut
        })
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //proverava da li je element visible, pa klikne na hide button, pa proveri da li je not visible

        cy.get('[value="radio2"]').check().should('be.checked')
        //radio buttons, moze check metoda i na radio button
    })
})