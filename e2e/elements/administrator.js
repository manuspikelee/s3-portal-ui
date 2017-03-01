function elements () {
  this.accountListBtn = element(by.css('[aria-label="Account List"]'));
  this.bucketListBtn = element(by.css('[aria-label="Bucket"]'));
  this.userList = element(by.css('[ng-if="list.data.length && ! list.requesting && ! list.error"]'));
  // this.allAccountList = element.all(by.repeater('f in list.data | filter:list.searchText'));
  this.accountListCheckbox = element.all(by.css('[ng-checked="f.checked"]'));
  this.createUserBtn = element(by.css('[ng-click="managerNav.createAccountDialog($event)"]'));
  this.deleteUserBtn = element(by.css('[ng-click="managerNav.delete()"]'));
  this.resetUserPasswordBtn = element(by.css('[ng-click="managerNav.reset()"]'));
  this.searchUser = element(by.name('searchText'));
  this.createUserForm = element(by.name('create.form'));
  this.createUserTitle = element(by.css('h2[class="ng-scope"]'));
  this.createUserEmailInput = element(by.name('email'));
  this.createUserEmailError = element(by.css('[ng-messages="create.form.email.$error"]'));
  this.createUserPasswordInput = element(by.name('password'));
  this.createUserPasswordError = element(by.css('[ng-messages="create.form.password.$error"]'));
  this.createUserPasswordConfInput = element(by.name('password_confirmation'));
  this.createUserPasswordConfError = element(by.css('[ng-messages="create.form.password_confirmation.$error"]'));
  this.createUserEmailExist = element(by.css('[ng-show="create.emailIsInvalid && create.showEmailCheckedMessage"]'));
  this.checkCreateUserBtn = element(by.css('[ng-click="create.submit()"]'));
  this.cancelCreateUserBtn = element.all(by.css('[ng-click="create.cancel()"]'));
  this.resetPasswordForm = element(by.name('reset.form'));
  this.ResetPasswordTitle = element(by.css('h2[class="ng-scope"]'));
  this.ResetPasswordPasswordInput = element(by.name('password'));
  this.ResetPasswordPasswordError = element(by.css('[ng-messages="reset.form.password.$error"]'));
  this.ResetPasswordPasswordConfInput = element(by.name('password_confirmation'));
  this.ResetPasswordPasswordConfError = element(by.css('[ng-messages="reset.form.password_confirmation.$error"]'));
  this.cancelResetPasswordBtn = element.all(by.css('[ng-click="reset.cancel()"]'));
  this.checkResetPasswordBtn = element(by.css('[ng-click="reset.submit()"]'));
  this.deleteUserTitle = element(by.css('h2[class="ng-scope"]'));
  this.deleteUserCheckMessage = element(by.css('p[class="text-warn ng-scope"]'));
  this.deletePromptMessage = element(by.css('p[class="ng-scope"]'));
  this.deleteUserEmailInput = element(by.name('name'));
  this.deleteUserEmailError = element(by.css('[ng-messages="delete.form.name.$error"]'));
  this.deleteUserEmailNonexistent = element(by.css('[ng-show="delete.checkStatus"]'));
  this.deleteUserForm = element(by.name('delete.form'));
  this.cancelDeleteUserBtn = element.all(by.css('[ng-click="delete.cancel()"]'));
  this.checkDeleteUserBtn = element(by.css('[ng-click="delete.accountDelete()"]'));

  this.setQuota = element.all(by.css('[ng-click="list.createQuotaSettingDiag($event, user)"]'));
  this.setQuotaForm = element(by.name('quota.form'));
  this.setQuotaCancel = element.all(by.css('[ng-click="quota.cancel()"]'));
  this.search = element(by.css('[ng-model="list.searchText"]'));
  this.allAccountList = element.all(by.repeater('user in list.data | filter: list.searchText | orderBy: list.query.order | limitTo: list.query.limit : (list.query.page -1) * list.query.limit'));
}

module.exports = elements;
