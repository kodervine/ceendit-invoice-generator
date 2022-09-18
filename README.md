# ceendit-invoice-generator
Creation of an invoice generator app - https://ceendit-invoice-generator.netlify.app/

Ceendit Documentation
The first method in the JavaScript file loads the window page to display only Ceendit Name, logo and the Create Invoice button to start filling the form

I didn't want to link different files to the page. So I decided to use display-none and show-class to make it work

So the first method calls an event listener to the window to hide the "form" and the "invoicePage" itself. 

Therefore, this displays only the "header" which contains the "createInvoice Button" 

***
The next function is "showInvoiceForm"

So basically, when the createInvoice button on the homepage is clicked, it will hide the header and display the "showInvoiceForm"

***
Then I defined the global variables to be used throughout the file

***
Next logic is validating input for numbers

That's to check for phone number and account number. I had to check 2 things for each of them
1. They should be in numbers format
2. And they shouldn't be more than 11 digits for phone number, and 10 digits for account number

So, I used Regular expression to match no 1, with inspiration from Web development simplified 

For the second part, I had already created paragraphs with the warning/tips in the HTML file, and set them to "display-none"

So, when either of the above conditions don't meet up, I remove the class of display none on the paragraphs 

Also, for the phone number part, I added a method to clear the whole input if it's not a number

***
Next function is to add the input values to the invoice proper and I decided to go with a general function - "addToInvoice"

The general function covers the elements that are under a "div." I made separate functions for the table 

For the "addToInvoice" Function, it had 2 parameters. The first is "formInput" to check input values

The second is the "appendDiv" for the div container where the input value will be appended to on the invoice page

For the logic, I created a condition to check if the input values is empty first. If so, it would alert a paragraph I'd created on the html file that says to "fill the forms correctly to continue"

Also, I create a set Time-Out function to add "display-none" to the red-alert paragraph after a few seconds. So the paragraph won't be embedded on the screen

Then, I added the conditional logic so that the empty input value won't be added to the invoice page when the generate Invoice button is clicked. 

So setting the "createParagraph" innerText (that's created few lines down) to nothing

In line with the above, I addressed the logic for the "showInvoiceForm" not to be hidden, and the "invoicePage" not to load when the "generate button" event listener triggers.


So I removed the display-none class from "main" and added display-none to the "invoicePage"

Then the else statement would be to hide the "showInvoiceForm" and show the "invoicePage"

Also created a paragraph element, where the innerText would be the "formInput" value
It's the paragraph element that is appended to the "appendDiv" parameter.

So this works for all the input values that are children of divs.
***
The other functions I created was for the tables  - "productItems" and "paymentTable"
The first one had 3 parameters while the second one had 4 parameters

The reason is for the parameters to be appended to the table rows.
I called it row1, row2, row3. In hindsight, it should have been col1, col2, col3

The conditional logic for the 2 functions is same with the addToInvoice own

The only difference is creating a "tr" element in place of the "paragraph" element

Then appending innerHTML to the "tr"

Also, setting the logic so that the "tr.InnerHTML" will be empty string on the invoicePage if it's empty

***
The next method was adding eventListener to the "generateInvoice" button on the form

So, on click of the button, I call the "addToInvoice" Function and pass in the 2 parameters for the input value and their corresponding divs. Then added the last 2 for the productItems and paymentTable 
***
The next function on the file is the "addMoreServices"

I added an event listener to the arrow font on the form, so as to create another input value for add services.

So, I created a new div - "newServicesDiv." And appended an innerHTML for label and the form itself.

Then used the "parentElement.previousElementSibling" method on the "addMoreServices" div to access the "addServices" input already on the HTML file

Then, used the insertAdjacentElement (afterend, newServicesDiv) on the accessed input, so as to show the newServicesDiv on the form

I gave them same class. But couldn't work around the logic for it to be appended on the invoicePage yet. So, I let it be 

***
Next function is the "saveInvoice"

The "savePdf" is a button static on the invoicePage.
So, I added an eventListener to it. 

When savePdf is clicked, it would add the display-none to itself, add display-none to all the other elements.

Then, it calls window.print( ) to generate the PDF copy 

Finally, it's going to call the "createInvoiceAgain" function

***
The "createInvoiceAgain" function creates another invoice instead of the user to reload the website

It's on the "invoicePage" and will be called in 2 occasions.

1. When it's clicked on directly
2. When the window.print( ) runs in the "saveInvoice" function 

For the logic, it is a setTimeout for 2 seconds.

It removes the display-none from itself in case display-none had been added after the savePdf event listener had run. 
Also, it removes "display-none" from the header
Then,  it adds "display-none" to the invoice-Page
***
The last logic on the file is to suggestBankNames.

What this does is to autocomplete bank names as one is typing in the bankNames input. 

I actually got the code from here - https://dev.to/walternascimentobarroso/autocomplete-with-js-551f, 

I only changed the array to strings of Nigeria banks, and customised the logic for my input values.

***
Final words
This project really was a learning process for me. And I'm happy with how it turned out. And that I actually achieved the main logics within 4 days.

I tried to make my variable names as descriptive as possible.

I had wanted to add the edit button to the tables. But my project can't be perfect. And I don't want to inject bugs. Also, I am self-aware enough to accept that my expertise hasn't reached that level yet

Anyways, this is the full documentation for the Ceendit invoice generator program. 
