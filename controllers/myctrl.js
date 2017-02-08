app.controller('myCtrl', function($scope,myTest) {
	console.log(myTest.getData())
	myTest.addData(' with some data')
	console.log(myTest.getData())
})

app.provider('myTest', function() {
	var string = "this is some data"
	var addToString = function(newStr) {
		string += newStr
	}
	return {
		// Providers allows you to do a configuration step
		// When you initialize your application
		setData: function(data) {
			string = data
		},
		$get: function() {
			return {
				getData: function() {
					return "String contains: " + string
				},
				addData: addToString
			}
		}
	}
}) 

// Config
app.config(function(myTestProvider) {
	myTestProvider.setData('some different string')
})

