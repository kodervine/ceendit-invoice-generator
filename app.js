// Declare global variable
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const invoicePage = document.querySelector('.invoice-page')

//  Hide other sections on document load for only header to show
// window.addEventListener('DOM', ()=> {
//   main.classList.add('display-none');
//   invoicePage.classList.add('display-none');
// })

// Defining Input variables here
const senderName = document.getElementById('sender-name');
const senderNum = document.getElementById('sender-num');
const senderEmail= document.getElementById('sender-email');
const recipientName = document.getElementById('recipient-name');
const recipientCompany = document.getElementById('recipient-company');
const recipientEmail= document.getElementById('recipient-email');
const dateCreated = document.getElementById('date-created');
const dateDue = document.getElementById('date-due');
const servicesProvided = document.getElementById('services');
const price = document.getElementById('price');
const bankName = document.getElementById('bank-name');
const accountNum = document.getElementById('account-num');
const accountName = document.getElementById('account-name');
const generateInvoice = document.getElementById('generate-invoice');

// Define div variables
const addInvoiceDate = document.querySelector('.add-invoice-date');
const senderDetailsDiv = document.querySelector('.sender-details');
const receiverDetailsDiv = document.querySelector('#receiver-details');
const paymentMethod = document.querySelector('#payment-method');
const productDetails = document.querySelector('.product-details');

// General Function to add input values to the invoice page
function addToInvoice(formInput, appendDiv){
  // Add input value to an element
  const createParagraph = document.createElement('p');
  createParagraph.innerText = formInput.value;

  appendDiv.appendChild(createParagraph);
  formInput.value = '';
}

// Generate invoice page details 
generateInvoice.addEventListener('click', ()=> {
  addToInvoice(dateCreated, addInvoiceDate);
  addToInvoice(dateDue, addInvoiceDate);
  addToInvoice(senderName, senderDetailsDiv);
  addToInvoice(senderNum, senderDetailsDiv);
  addToInvoice(senderEmail, senderDetailsDiv);
  addToInvoice(recipientName, receiverDetailsDiv);
  addToInvoice(recipientCompany, receiverDetailsDiv);
  addToInvoice(recipientEmail, receiverDetailsDiv);
})