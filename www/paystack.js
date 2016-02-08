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
		'PaystackCordova',
		'initialize',
		[options.secret_key, options.reference, options.amount, options.email ]
	);
};

/**
* Initialize transaction
*/
Paystack.prototype.verify = function(reference, successCallback, errorCallback) {
	cordova.
	exec(
		successCallback,
		errorCallback,
		'PaystackCordova',
		'verify',
		[options.secret_key, options.reference]
	);
};

Paystack.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.paystack = new Paystack();
  return window.plugins.paystack;
};

cordova.addConstructor(Toast.install);