Instance variables/data members: 
cno – to store the customer number
phno – to store the phone number of the customer
name – to store the name of the customer
tickets– Use generic Array
Member methods:
void addTicket( ) – to add Ticket for this particular instance of customer
Define a class called Ticket with the following description: 

Instance variables/data members: 
cost - to Store the Price of ticket.
 
Member methods:
void computeOverallPrice( ) – which would compute the overall price based on below scheme.
 
Discount and scheme are as follows:
Above Rs. 70000 – 18% discount
Rs. 55001 to Rs. 70000 – 16% discount
Rs. 35001 to Rs. 55000 – 12% discount
Rs. 25001 to Rs. 350000 – 10% discount
Less than Rs. 25001 – 2%
Define a TravelCalc class ,Use generic Array for the implementation of the Customer class.

Default Page Navbar

InnerText	Path	ControlId
Home	/	home(click event)
Customer Form	/customerForm.html	customerForm(click event)
Ticket Form	/ticketForm.html	ticketForm(click event)
 

On click event  should be redirected to respected URL mentioned in the path.

Home Page

Home Page should consist of table which would consists of following information

Customer Table and Customer Ticket History which will be nested table. 

Note: Nested Table Id should be as follow for example: customer(cno: 001, ...)

<table id="nestedTable-001"></table>

Table should consist of following field as shown in below image

Image

 

 

Customer Form

Customer Form should consist of following field

Note: On Successful validition the onClick of the Submit Button user should be redirect to Home Page
 

 

Field	Type	ControlId	ControlId For Error	Validation
Customer Number	string	customerNo	customerNumberError	
 

Validation Type	Validaton error
Required	Customer Number Required
Unique	Customer Number Already Present
 

Customer Phone Number	number	customerPhNo	customerPhNoError	
 

Validation Type	Validaton error
Required	Phone Number Required
Length	Phone Number length must be 10
 

Customer Name	string	customerName	customerNameError	
 

Validation Type	Validaton error
Required	Customer Name Required
Length	Customer Name length should at least 3 character and at most 10 character
 

Add Customer	submit	addCustomerFormBtn	 	 
 

Ticket Form

Ticket Form should consist of following field

Note: Customer Number should be binded with the Customer details

  i.e for Customer (cno: 001, name: Test) <option value="001">Test</option>

Note: On Successful validition the onClick of the Submit Button user should be redirect to Home Page

 

Field	Type	ControlId	ControlId For Error	Validation
Select customer Number	DropDown	customerNumber	customerNumberDropDownError	
 

Validation Type	Validaton error
Required	Select customer Number
 

Ticket Cost	Number	ticketCost	ticketCostError	
 

Validation Type	Validaton error
Required	Ticket Cost Required
Negative	Ticket Cost must be postive
 

Add Ticket	submit	ticketFormSubmitBtn	 	 
 

 

Application should consist of three pages.

 

 

InnerText	Path	ControlId
Home	/	home
Customer Form	/customerForm	customerForm
Ticket Form	/ticketForm	ticketForm
 

Home Page

Home Page should consist of table which would consists of following information

Customer Table and Customer Ticket History which will be nested table. 

Note: Nested Table Id should be as follow for example: customer(cno: 001, ...)

<table id="nestedTable-001"></table>

Table should consist of following field as shown in below image

 

 

Customer Form

Customer Form should consist of following field

Note: On Successful validition the onClick of the Submit Button user should be redirect to Home Page
 

 

Field	Type	ControlId	ControlId For Error	Validation
Customer Number	string	customerNo	customerNumberError	
 

Validation Type	Validaton error
Required	Customer Number Required
Unique	Customer Number Already Present
 

Customer Phone Number	number	customerPhNo	customerPhNoError	
 

Validation Type	Validaton error
Required	Phone Number Required
Length	Phone Number length must be 10
 

Customer Name	string	customerName	customerNameError	
 

Validation Type	Validaton error
Required	Customer Name Required
Length	Customer Name length should at least 3 character and at most 10 character
 

Add Customer	submit	addCustomerFormBtn	 	 
 

Ticket Form

Ticket Form should consist of following field

Note: Customer Number should be binded with the Customer details

  i.e for Customer (cno: 001, name: Test) <option value="001">Test</option>

Note: On Successful validition the onClick of the Submit Button user should be redirect to Home Page

 

Field	Type	ControlId	ControlId For Error	Validation
Select customer Number	DropDown	customerNumber	customerNumberDropDownError	
 

Validation Type	Validaton error
Required	Select customer Number
 

Ticket Cost	Number	ticketCost	ticketCostError	
 

Validation Type	Validaton error
Required	Ticket Cost Required
Negative	Ticket Cost must be postive
 

Add Ticket	submit	ticketFormSubmitBtn	 





interface customer{
  cno: string;
  phno: number;
  name: string;
}
class Customer {
  cno: string;
  phno: number;
  name: string;
  tickets: Ticket[] = []; //generic 

  constructor(cno: string, phno: number, name: string) {
    this.cno = cno;
    this.phno = phno;
    this.name = name;
  }
  display() :void{
    custArr.push({ cno: this.cno, phno: this.phno, name: this.name })
  }
  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }
  computeOverallPrice(): number {
    return this.tickets.reduce((total, ticket) => total + ticket.computeOverallPrice(), 0);
  }
}
let custArr: customer[] = []; //generic array for customer object

// if(!localStorage.getItem('customer')){
//   addToLacalStorage(custArr);
// }

function addCustomer() {
  let cno = (<HTMLInputElement>document.getElementById('customerNo')).value;
  let phno = (<HTMLInputElement>document.getElementById('customerPhNo')).value;
  console.log(typeof phno);

  let name = (<HTMLInputElement>document.getElementById('customerName')).value;

  let cnoErr = (<HTMLDivElement>document.getElementById('customerNumberError'));
  let phnoErr = (<HTMLDivElement>document.getElementById('customerPhNoError'));
  let cnameErr = (<HTMLDivElement>document.getElementById('customerNameError'));

  //empty errors
  (<HTMLDivElement>document.getElementById('customerNumberError')).innerHTML = "";
  (<HTMLDivElement>document.getElementById('customerPhNoError')).innerHTML = "";
  (<HTMLDivElement>document.getElementById('customerNameError')).innerHTML = "";

  let flag: boolean = true;
  //validate customer no.
  if (!cno) {
    cnoErr.innerHTML = `Customer Number Required`
    flag = false;
  }
  else if (custArr.some((c) => c.cno === cno)) {
    cnoErr.innerHTML = `Customer Number Already Present`
    flag = false;
  }

  //validate phone no
  if (!phno) {
    phnoErr.innerHTML = `Phone Number Required`
    flag = false;
  }
  else if (phno.length != 10) {
    phnoErr.innerHTML = `Phone Number length must be 10`
    flag = false;
  }

  //validate customer name
  if (!name) {
    cnameErr.innerHTML = `Customer Name Required`
    flag = false;
  }
  else if (name.length <= 3 && name.length >= 10) {
    cnameErr.innerHTML = `Customer Name length should at least 3 character and at most 10 character`
    flag = false;
  }

  if (flag) {
    const c = new Customer(cno, +phno, name);
    c.display();
    alert('customer Added succesfully');
    addToLacalStorage();
    redirectToHomePage();
  }
}
document.getElementById('addCustomerFormBtn')?.addEventListener('click', addCustomer);

function addToLacalStorage() {
  localStorage.setItem('customer', JSON.stringify(custArr))
}

//display
//mainTable.innerHTML = ""; //clear previous entries

let data=localStorage.getItem('customer');
console.log(data)

let selectedId=(<HTMLInputElement>document.getElementById('customerNo'));

//let mainTable = <HTMLSelectElement>document.getElementById('CutomerTableBody');

if(data){
custArr=JSON.parse(data);
console.log(custArr)
custArr.forEach((c)=>{
  selectedId.innerHTML+=`<option value="${c.cno}">${c.cno}</option>`
})
// custArr.forEach((c) => {
//   mainTable.innerHTML = `<tr>
//     <td>${c.cno}</td>
//     <td>${c.phno}</td>
//     <td>${c.name}</td>
//     <td>
//     <table id="nestedTable${c.cno}" border="1">
//     <tr>
//     <th>Ticket Cost</th>
//     <th>Discounted Cost</th>
//     </tr>
//     </tr></table>
//     </td>
//     </tr>`
// })
}

class Ticket {
  cost: number;

  constructor(cost: number) {
    this.cost = cost;
  }

  computeOverallPrice(): number {
    let discount = 0;

    if (this.cost > 70000) discount = 0.18;
    else if (this.cost >= 55001) discount = 0.16;
    else if (this.cost >= 35001) discount = 0.12;
    else if (this.cost >= 25001) discount = 0.10;
    else discount = 0.02;

    return this.cost * (1 - discount);
  }
}

function redirectToHomePage() {
  window.location.href = "/";
}
