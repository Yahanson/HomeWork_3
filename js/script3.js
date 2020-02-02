'use strict'
let time, money;

// function start() {
// 		money = +prompt("Ваш бюджет на месяц?" , "");
// 		time = prompt("Введите дату в формате YYYY-MM-DD" , "");
	
// 	while(isNaN(money) || money == "" || money == null) {
// 		money = +prompt("Ваш бюджет на месяц?" , "");
// 	}
// }
// start();

let appData = {
    budget: money ,
    timeData : time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true
};

	// function chooseExpenses () {
	// 	for(let i = 0; i < 2; i++) {
	// 		let a = prompt("“Введите обязательную статью расходов в этом месяце”" , "");
	// 		let b = prompt("“Во сколько обойдется?”" , "");
			
	// 		if( (typeof(a))==="string" &&(typeof(a)) != null && (typeof(b) != null) &&
	// 		a != 'null' && b !='null' && a.length < 50) {
	// 			appData.expenses[a]=b;
	// 			console.log('done');
	// 		} 
	// 			else {
	// 				i = i-1;
	// 			}
	// 	}
	// }
	// chooseExpenses();

	
// 	function detectDayBudget () {
// 		appData.moneyPerDay = (appData.budget/30).toFixed(1);
// 		alert("Ежедневный бюджет: " + appData.moneyPerDay);
// 	}
// 	detectDayBudget();
    
	
// 	function detectLevel() {
// 		if(appData.moneyPerDay <100) {
// 			console.log("минимальный уровень достатка");
// 		}
// 		else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
// 			console.log("средний уровень достатка");
// 		} 
// 		else if(appData.moneyPerDay > 2000) {
// 			console.log('высокий уровень достатка');
// 		} else {
// 			console.log('произошла ошибка');
// 		}
// 	}
	
// function checkSavings() {
// 	if (appData.savings == true) {
// 		let  save = +prompt("Какова сумма накоплений?") ,
// 			percent = +prompt("Под какой процент");
		
// 		appData.monthIncome = save/100/12*percent;
// 		alert("доход в месяц с депозита:" +appData.monthIncome);
// 	}
// }
// checkSavings();

function chooseOptExpenses () {
	for(let i = 0; i < 3; i++)	{
		let a = prompt("Статья необязательных расходов?" , "");
		


		if(typeof(a)== "string" && (typeof(a) != null) && a!=null) {
			appData.optionalExpenses[i] = a;
		}
	
  }
}
chooseOptExpenses();