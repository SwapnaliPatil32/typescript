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
