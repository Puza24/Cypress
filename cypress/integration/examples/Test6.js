
/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        //ubacujemo u loop celu kolonu 'Course'
            const text = $e1.text()
            //ovde smo ubacili text od elemenata u variablu
            if (text.includes("Python")) {
            //ako text u koloni 'Course' sadrzi rec 'Python'
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                //cy.get(selektor iznad) - ovako je sintaxa za next() metodu tj mora da krene od cy.get+selektor
                //onda u toj koloni gde je rec 'Python' uhvati index, odradi next() da bi se prebacilo na price selektor, resolve ga sa then jer text nije Cypress metoda
                    const priceText = price.text()
                    //stavi text od price-a u varijablu priceText
                    expect(priceText).to.equal('25')
                    //uporedi da li je text isti kao i broj 26 sto smo stavili
                })
            }

        })

    })
})