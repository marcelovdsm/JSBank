const App = require("./App")

App.createUser("marcelo@gmail.com", "Marcelo Victor")
App.createUser("fulano@gmail.com", "Fulano Silva")
App.createUser("jose@gmail.com", "José Santos")

App.deposit("marcelo@gmail.com", 200)

App.transfer("marcelo@gmail.com", "jose@gmail.com", 100)

App.changeLoanFee(10)
App.takeLoan("jose@gmail.com", 500, 10)

console.log(App.findUser("marcelo@gmail.com"))
console.log(App.findUser("marcelo@gmail.com").account)
console.log(App.findUser("fulano@gmail.com"))
console.log(App.findUser("fulano@gmail.com").account)
console.log(App.findUser("jose@gmail.com"))
console.log(App.findUser("jose@gmail.com").account)
console.log(App.findUser("jose@gmail.com").account.loans[0].installments)

