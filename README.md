# **Paystack Cordova Plugin** 

Cordova Android Plugin for [Paystack](https://paystack.co).
Paystack is a Nigerian payment platform allowing users to collect payments via MasterCard, Visa, and Verve cards.

## **Installation**

from github
```
cordova plugin add https://github.com/mrfoh/paystackcordova.git
```

##**API Reference**

####**window.plugin.paystack.initialize(options, successCallback, errorCallback)**

Makes a post request to the paystack rest api (https://api.paystack.co/transaction/initialize), to initialize a new transaction.
Returns a paystack authorization url in the successCallback, and an error object in the errorCallback
 
#####**options**

secret_key: Paystack secret_key

reference: Unique transaction reference

amount: Transaction amount in kobo

email: Customer email address

#####**successCallback**

    function(authorizationUrl) {
    }

returns transaction authorizationUrl, used to display the paystack payment page

#####**errorCallback**

    function(error) {
    }

return request errors from request

####**window.plugin.paystack.verify(options, successCallback, errorCallback)**

Makes a get request to the paystack rest api (https://api.paystack.co/transaction/verifying-transactions), to verify a  transaction.
Returns a response object in the successCallback, and an error object in the errorCallback
 
#####**options**

secret_key: Paystack secret_key 

reference: Unique transaction reference

#####**successCallback**

    function(response) {
    }

returns response object

#####**errorCallback**

    function(error) {
    }

return request errors from request

####**window.plugin.paystack.charge(options, successCallback, errorCallback)**

Makes a post request to the paystack rest api (https://api.paystack.co/transaction/charging-returning-customers), to charge to return customer.
Returns a response object in the successCallback, and an error object in the errorCallback
 
#####**options**

secret_key: Paystack secret_key 

reference: Unique transaction reference

amount: Transaction amount in kobo

email: Customer email,

authorization_code: Authorization code

#####**successCallback**

    function(response) {
    }

returns response object

#####**errorCallback**

    function(error) {
    }

return request errors from request


## **Usage**

#### **Initializing a transaction**

To initialize a new transaction request to the paystack api. Check out the [Paystack Docs](https://developers.paystack.co/docs/paystack-standard) for more info.
PS. This plugin doesn't support paystack plans yet.

    var options = {
	    secret_key: secret_key, //your paystack secret key
	    reference: reference, //your unique transaction reference,
		amount: amount, //transaction amount in kobo (naira value * 100)
		email: email //customer email address
    };
    
    //call initialize method
    window.plugins.paystack.initialize(options, function(authorizationUrl) {
	    //open authorizationUrl with inAppBrowser
    }, function(error) {
	    //handle error
    });
    
  
####**Verifying transactions** 

As per paystack conventions, it is recommend you verify your transactions before giving value to customers.
Check out the [Paystack Docs](https://developers.paystack.co/docs/verifying-transactions) for more info on verifying transactions.

    var options = {
	    secret_key: secret_key //your paystack secret key
	    reference: reference //transaction reference for verification
    };
	
	window.plugins.verify(options, function(response) {
		/** respone from paystack, you'll probably want to save the authorization object to charge returning user
		*/
	}, function(error) {
		//Handle error
	});

#### **Charging returning customers**

Paystack allows you to charge returning customers, without them entering their cards details again.
Check out the [Paystack Docs](https://developers.paystack.co/docs/charging-returning-customers) for more info on verifying transactions.

    var options = {
	    secret_key: secret_key,
		reference: reference,
		amount: amount,
		email: email,
		authorization_code: authorization_code
    };
	
	
	window.plugins.paystack.charge(options, function(response)  {
	/** respone from paystack, you'll probably want to verify the transaction, and  save the authorization object to charge returning user
		*/
	}, function(error) {
		//handle error
	});
