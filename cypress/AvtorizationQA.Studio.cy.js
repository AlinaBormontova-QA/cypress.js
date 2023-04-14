describe('Автотесты для формы логина и пароля', function () {
    
    it('Позитиный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#loginButton') .should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton') .should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })


    
    it('автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail') .type('german@dolnikov.ru');
        cy.get('#loginButton') .should('be.disabled')
        cy.get('#pass') .type('iLoveqastudio2');
        cy.get('#loginButton') .should('be.enabled') .click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon') .click();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('негативный кейс авторизации НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#loginButton') .should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton') .should('be.enabled') .click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

it('негативный кейс авторизации НЕправильный логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov6.ru')
    cy.get('#loginButton') .should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton') .should('be.enabled') .click()
    cy.get('#messageHeader').contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})


it('негативный кейс авторизации валидации Логин без @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov6.ru')
    cy.get('#loginButton') .should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton') .should('be.enabled') .click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})


it('проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru')
    cy.get('#loginButton') .should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton') .should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})
})