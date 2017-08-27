before(() => {
  browser.url('https://www.google.com')
  browser.waitForVisible('#not-an-id-on-the-page')
})

describe('run test', () => {

  it('does something', () => {
    // test here
  })

})