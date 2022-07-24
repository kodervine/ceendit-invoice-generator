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
const servicesPrice = document.getElementById('price');
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
  if(formInput.value === ''){
    const redAlert = document.querySelector('.red-alert');
    redAlert.classList.remove('display-none');
    // Work on stopping appended child

    setTimeout(() => {
      redAlert.classList.add('display-none');
    }, 1000);
  }

  // Add input value to an element
  const createParagraph = document.createElement('p');
  createParagraph.innerText = formInput.value;

  appendDiv.appendChild(createParagraph);
  formInput.value = '';
}

// Add to product / service provided table
function productItems(row1, row2, appendDiv){
  const createRow = document.createElement('tr');
  createRow.innerHTML =  `
  <td>${row1.value}</td>
  <td>${row2.value}</td>
  <td><i class="fa-solid fa-ellipsis-vertical"></i><p class="display-none">Edit invoice</p></td>
  `
  appendDiv.appendChild(createRow);
  row1.value = '';
  row2.value = '';
}

// Add to bank payment method details
function paymentTable(row1, row2, row3, appendDiv){
  const createRow = document.createElement('tr');
  createRow.innerHTML =  `
  <td>${row1.value}</td>
  <td>${row2.value}</td>
  <td>${row3.value}</td>
  `
  appendDiv.appendChild(createRow);
  row1.value = '';
  row2.value = '';
  row3.value = '';
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
  productItems(servicesProvided, servicesPrice, productDetails)
  paymentTable(bankName, accountName, accountNum,paymentMethod) 
})