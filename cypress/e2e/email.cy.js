// before(function () {
//   cy.log('Wrap inbox before test')
//   return cy.mailslurp()
//     .then(mailslurp => mailslurp.createInbox())
//     .then(inbox => {
//       cy.log(`Inbox id ${inbox.id}`)
//       // save inbox id and email address to this (make sure you use function and not arrow syntax)
//       cy.wrap(inbox.id).as('inboxId')
//       cy.wrap(inbox.emailAddress).as('emailAddress')
//     })
// })
// describe('user sign up test with mailslurp plugin', function () {
//   it('01 - can load the demo application', function () {
//     // get wrapped email address and assert contains a mailslurp email address
//     cy.get('@emailAddress').then(emailAddress => {
//       expect(emailAddress).to.contain('@mailslurp')

//       // visit the demo application
//       cy.visit('https://playground.mailslurp.com')
//       cy.title().should('contain', 'React App')

//       // click sign up and fill out the form
//       cy.get('[data-test=sign-in-create-account-link]').click()

//       // use the email address and a test password
//       cy.get('[name=email]').type(emailAddress).trigger('change')
//       cy.get('[name=password]').type('test-password').trigger('change')

//       // click the submit button
//       cy.get('[data-test=sign-up-create-account-button]').click()

//       // app will send user an email containing a code, use mailslurp to wait for the latest email
//       cy.get('@inboxId').then(inboxId => {
//         cy.mailslurp()
//           .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))
//           .then(email => /.*verification code is (\d{6}).*/.exec(email.body)[1])
//           .then(code => {
//             cy.get('[name=code]').type(code).trigger('change')
//             cy.get('[data-test=confirm-sign-up-confirm-button]').click()
//             cy.get('[data-test=username-input]').type(emailAddress).trigger('change')
//             cy.get('[data-test=sign-in-password-input]').type('test-password').trigger('change')
//             cy.get('[data-test=sign-in-sign-in-button]').click()
//           })

//         // assert that the user is welcomed
//         cy.get('h1').should('contain', 'Welcome')
//       })
//     })
//   })
// })
