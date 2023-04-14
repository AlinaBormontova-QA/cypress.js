describe('Автотест для HuntingPony', function () {
    it('Проверка оформления заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link') .click();
        cy.contains('Лежанки');
        cy.get('[data-product-id="338933074"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1') .click();
        cy.get('[data-add-cart-counter-plus=""]') .click({ force: true })
        cy.get('.add-cart-counter__detail').click({ force: true })
        cy.contains('Корзина');
        cy.wait(5000)
        cy.get('.cart-controls > .button') .click();
        cy.contains('Оформление заказа');
       })                        
   })