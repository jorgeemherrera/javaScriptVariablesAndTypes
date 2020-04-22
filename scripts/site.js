class LoanApplication {
  Id = create_UUID();
  ApplicantName;
  ApplicantDateOfBirth;
  ApplicantAnnualIncome;
  Factors = [];
  LoanPurpose;
  LoanAmount;
}

var LoanApplicationList = [];

// Fires when the page loads
window.onload = function () {

  initializeLoans();

  bindLoansToDropDown();
}

function initializeLoans() {}