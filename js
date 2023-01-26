describe('Borrowing funds', () => {

    it('borrows funds from the pool', async () => {
      let amount = tokens(100)
      let transaction = await flashLoanReceiver.connect(deployer).executeFlashLoan(amount)
      let result = await transaction.wait()
    })

  })
