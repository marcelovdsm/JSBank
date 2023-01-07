import { Account } from './Account.mjs'

class User {
  constructor(fullName, email) {
    this.fullName = fullName
    this.email = email
    this.account = new Account(this)
  }
}

export { User }