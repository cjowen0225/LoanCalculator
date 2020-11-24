
it('should calculate the monthly rate correctly', function () {
  // ...
  let loan = {
    amount: 100000,
    years: 50,
    rate: 5.7
  };
  expect(calculateMonthlyPayment(loan)).toEqual('504.37');
});


it("should return a result with 2 decimal places", function() {
  // ..
  let loan = {
    amount: 63942,
    years: 34,
    rate: 3.3
  };
  expect(calculateMonthlyPayment(loan)).toEqual('260.94');
});

/// etc
