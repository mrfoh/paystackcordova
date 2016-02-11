var Paystack = function() {
};

/**
* Initialize transaction
*/
Paystack.prototype.initialize = function(options, successCallback, errorCallback) {
	cordova.
	exec(
		successCallback,
		errorCallback,
		"PaystackCordova",
		"initialize",
		[{
			"secret_key": options.secret_key,
			"reference": options.reference,
			"amount": options.amount,
			"email": options.email
		}]
	);
};

/**
* Verify transaction
*/
Paystack.prototype.verify = function(options, successCallback, errorCallback) {
	cordova.
	exec(
		successCallback,
		errorCallback,
		"PaystackCordova",
		"verify",
		[{
			"secret_key": options.secret_key,
			"reference": options.reference
		}]
	);
};

/**
* Charge 
*/
Paystack.prototype.charge = function(options, successCallback, errorCallback) {
	cordova.
	exec(
		successCallback,
		errorCallback,
		"PaystackCordova",
		"charge",
		[{
			"secret_key": options.secret_key,
			"reference": options.reference,
			"amount": options.amount,
			"email": options.email,
			"authorization_code": options.authorization_code
		}]
	);
}

Paystack.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.paystack = new Paystack();
  return window.plugins.paystack;
};

cordova.addConstructor(Paystack.install);