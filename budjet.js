let totalAmountButton = document.getElementById('total-amount-button');
let totalAmont = document.getElementById('total-amount');
let amount = document.getElementById('amount');
let expenditureValue = document.getElementById('expenditure-value');
let balanceValue  =   document.getElementById('balance-amount');
let userAmount = document.getElementById('user-amount');
let productTitle = document.getElementById('product-title');
let checkAmountButton = document.getElementById('check-amount');
let sup = document.getElementById('sup');
let suprim = document.getElementById('suprim');
let suprimer = document.getElementById('suprimer');
const list = document.getElementById('list');
let tempAmount = 0;
 

// calcul.addEventListener ('click', () => {
    
//     if (wango === "" || wango < 0) {
       
//     }
// })

localStorage.setItem('wango', 'abass')
let valeur = localStorage.getItem('wango')
console.log(valeur);

totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmont.value;
  
  if (tempAmount < 0) {
   alert("veillez d'abort saisir");
   console.log(tempAmount);
  } 
  else{
      sup.classList.remove('Ajout')
    setTimeout(() => {
      sup.classList.add('Ajout');
    }, "1000");
    amount.innerHTML = tempAmount;
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    totalAmont.value = ""; 
    // amount.innerText = parseInt(amount.innerText) + parseInt(totalAmont.value) + " F";
    // balanceValue.innerText =  parseInt(amount.innerText) -  parseInt(expenditureValue.innerText)+ " F";
    // totalAmont.value="";
  }

  })
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['sucre', 'cafe', 'chocolat'],
      datasets: [{
        label: '# ',
        data: [15, 15, 15],
        borderWidth: 1
      }]
    },
   
  });
    // Récupérer la valeur de l'input
    // let chant = document.getElementById('input').value;
   
    // // Mettre la valeur dans le expen
    // document.getElementById('budjet').innerText = chant;
    // let balance = document.getElementById('balance').innerText = chant - balance.innerText;

    // document.getElementById('balance').innerText = ;
  

  // Attacher la fonction à l'événement de clic du bouton
  // document.getElementById('calculate').addEventListener('click', afficher);
  
 
  const disableButton = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) =>
    {element.disabled = bool;})
    console.log(disableButton);
};


const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currenceBalance = balanceValue.innerText;
    let currenceExpense = expenditureValue.innerText;
    let parentAmonunt = parentDiv.queryselector(".amount").innerText;
    if (edit) { let parentText = parentDiv.queryselector("product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmonunt;
    disableButton(true);
        
    }
    balanceValue.innerText = parseInt(currenceBalance) + parseInt(parentAmonunt);
    expenditureValue.innerText = parseInt(currenceExpense) - parseInt(parentAmonunt);
    parentDiv.remove();
} ;



const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content");
    sublistContent.innerHTML = `<p class = "product"> ${expenseName} </p> <p class = "amount"> ${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square" , "edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    } )
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can" , "delete");
    deleteButton.style.fontSize ="24px";
    deleteButton.addEventListener("click", () =>  {
        modifyElement(deleteButton);
    } )
    sublistContent.append(editButton);
    sublistContent.append(deleteButton);
    document.getElementById("list").appendChild(sublistContent); }


    
    checkAmountButton.addEventListener("click", () => {
        if (!userAmount.value || !productTitle.value) { 
          suprimer.classList.remove('Ajoute')
          setTimeout(() => {
            suprimer.classList.add('Ajoute');
          }, "5000");
            return false      
        }
        disableButton(false);
        suprim.classList.remove('Ajouter')
        setTimeout(() => {
          suprim.classList.add('Ajouter');
        }, "1000");

        let expenditure = parseInt(userAmount.value);
        let sum = parseInt(expenditureValue.innerText) + expenditure;
        expenseValue.innerText = sum;
        const totalBalance = tempAmount - sum;
        balanceValue.innerText = totalBalance;
        listCreator(productTitle.value, userAmount.value);
        productTitle.value = "";
        userAmount.value = "";
    })

    // addExpense.addEventListener("click", () =>{
    //   if ( userAmount.value < 0) {
       
       
    //   } else {
      
    //   // expen.innerText = parseInt(expen.innerText) + parseInt(Amount.value) + " F";
     
    //   // Amount.value = " ";
    // }
      
    // });
  

  