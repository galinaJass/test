// JavaScript Document

function getFocus()
{
	document.orderForm.lastName.focus();
	document.orderForm.country.value = "Canada";	
}

// Trim all text fields on blur
function trimOnBlur(myField)
{
	myField.value = myField.value.trim();
}

// Trim and conversion to upper case for Postal code
function trimAndToUpperOnBlur(myField)
{
	myField.value = myField.value.trim();
	myField.value = myField.value.toUpperCase();
}

function validate()
{
	// validation of all entries
	var errorMessage = "";
	
		
	if(!document.orderForm.lastName.value)	
	{
		if(!errorMessage)	
		{
			document.orderForm.lastName.focus();	
		}
		$("#lastName").css("border", "3px solid red");
		errorMessage += "\nLast Name is required";
	}
	else
	{
		$("#lastName").css("border", "1px solid #FCF");
	}
	
	if(!document.orderForm.firstName.value)
	{
		if(!errorMessage)
		{
			document.orderForm.firstName.focus();
		}	
		$("#firstName").css("border", "3px solid red");
		errorMessage += "\nFirst Name is required";
	}
	else
	{
		$("#firstName").css("border", "1px solid #FCF");
	}
	
	if(!document.orderForm.email.value)
	{
		if(!errorMessage)
		{
			document.orderForm.email.focus();
		}
		$("#email").css("border", "3px solid red");
		errorMessage += "\nE-mail is required";
	}
	else
	{
		var reEmail = /^[^ ,;]+@[^ ,;]+\.[^ ,;]+$/;			
		if(!reEmail.test(document.orderForm.email.value))
		{
			if(!errorMessage)	
			{
				document.orderForm.email.focus();	
			}
			$("#email").css("border", "3px solid red");
			errorMessage += "\nE-mail must be entered as " + 
			"myEmail@hotmail.com and can not consist space or , or ; " + 
			"characters";
		}
		else
		{
			$("#email").css("border", "1px solid #FCF");
		}
	}
	
	if(!document.orderForm.phoneNumber.value)
	{
		if(!errorMessage)
		{
			document.orderForm.phoneNumber.focus();
		}
		$("#phoneNumber").css("border", "3px solid red");
		errorMessage += "\nPhone number is required";
	}
	else
	{
		var rePhoneNumber = /^\(\d{3}\)\d{3}\-\d{4}$/;
		if(!rePhoneNumber.test(document.orderForm.phoneNumber.value))	
		{
			if(!errorMessage)	
			{
				document.orderForm.phoneNumber.focus();	
			}
			$("#phoneNumber").css("border", "3px solid red");
			errorMessage += "\nPhone Number must consist of number " +
			"and/or charaters ()., or space";
		}
		else
		{
			$("#phoneNumber").css("border", "1px solid #FCF");
		}
	}
	
	if(!document.orderForm.streetNumber.value)
	{	
		if(!errorMessage)
		{
			document.orderForm.streetNumber.focus();
		}
		$("#streetNumber").css("border", "3px solid red");
		errorMessage += "\nStreet number is required";
	}
	else
	{
		$("#streetNumber").css("border", "1px solid #FCF");
	}
	
	if(!document.orderForm.street.value)
	{
		if(!errorMessage)
		{
			document.orderForm.street.focus();
		}
		$("#street").css("border", "3px solid red");
		errorMessage += "\nStreet is required";
	}
	else
	{
		$("#street").css("border", "1px solid #FCF");
	}
	
	if(!document.orderForm.postalCode.value)
	{
		if(!errorMessage)
		{
			document.orderForm.postalCode.focus();
		}
		$("#postalCode").css("border", "3px solid red");
		errorMessage += "\nPostal Code is required";
	}
	else
	{
		var rePostalCode = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;
		if(!rePostalCode.test(document.orderForm.postalCode.value))
		{
			if(!errorMessage)	
			{
				document.orderForm.postalCode.focus();
			}
			$("#postalCode").css("border", "3px solid red");
			errorMessage += "\nPostal Code must be entered as A2A 2A2";
		}
		else
		{
			$("#postalCode").css("border", "1px solid #FCF");
		}
	}
	
	if(!document.orderForm.city.value)
	{
		if(!errorMessage)
		{
			document.orderForm.city.focus();
		}
		$("#city").css("border", "3px solid red");
		errorMessage += "\nCity is required";
	}
	else
	{		
		var reCity = /^[a-z]{3,30}$/i;
		if(!reCity.test(document.orderForm.city.value))
		{
			if(!errorMessage)
			{
				document.orderForm.city.focus();	
			}
			$("#city").css("border", "3px solid red");
			errorMessage += "\nCity must be as least 3 " + 
					"letters in length";
		}
		else
		{
			$("#city").css("border", "1px solid #FCF");
		}
	}
	
	if(document.orderForm.province[0].selected)
	{
		$("#province").css("border", "3px solid red");
		errorMessage += "\nSelect the Province";
	}
	else
	{
		$("#province").css("border", "1px solid #FCF");
	}
	
	if(!document.orderForm.country.value)
	{
		if(!errorMessage)
		{
			document.orderForm.country.focus();
		}
		$("#province").css("border", "3px solid red");
		errorMessage += "\nCountry is required";
	}
	else
	{
		$("#province").css("border", "1px solid #FCF");
	}
	
	// popsicle quantity validation
	if(document.orderForm.orangeQuantity.value)
	{
		if(isNaN(document.orderForm.orangeQuantity.value) == true)
		{
			if(!errorMessage)
			{
				document.orderForm.orangeQuantity.focus();
			}
			$("#orangeQuantity").css("border", "3px solid red");
			errorMessage += "\nOrange popsicle quantity must be an integer";
		}
		else
		{
			$("#orangeQuantity").css("border", "1px solid #FCF");
		}
	}
	
	if(document.orderForm.cherryQuantity.value)
	{
		if(isNaN(document.orderForm.cherryQuantity.value) == true)
		{
			if(!errorMessage)
			{
				document.orderForm.cherryQuantity.focus();
			}
			$("#cherryQuantity").css("border", "3px solid red");
			errorMessage += "\nCherry popsicle quantity must be an integer";
		}
		else
		{
			$("#cherryQuantity").css("border", "1px solid #FCF");
		}
	}
	if(document.orderForm.grapeQuantity.value)
	{
		if(isNaN(document.orderForm.grapeQuantity.value) == true)
		{
			if(!errorMessage)
			{
				document.orderForm.grapeQuantity.focus();
			}
			$("#grapeQuantity").css("border", "3px solid red");
			errorMessage += "\nGrape popsicle quantity must be an integer";
		}
		else
		{
			$("#grapeQuantity").css("border", "1px solid #FCF");
		}
	}
	if(document.orderForm.jollyRancherQuantity.value)
	{
		if(isNaN(document.orderForm.jollyRancherQuantity.value) == true)
		{
			if(!errorMessage)
			{
				document.orderForm.jollyRancherQuantity.focus();
			}
			$("#jollyRancherQuantity").css("border", "3px solid red");
			errorMessage += 
				"\nJolly Rancher popsicle quantity must be an integer";
		}
		else
		{
			$("#jollyRancherQuantity").css("border", "1px solid #FCF");
		}
	}
	if(document.orderForm.spongeBobQuantity.value)
	{
		if(isNaN(document.orderForm.spongeBobQuantity.value) == true)
		{
			if(!errorMessage)
			{
				document.orderForm.spongeBobQuantity.focus();
			}
			$("#spongeBobQuantity").css("border", "3px solid red");
			errorMessage += 
				"\nSponge Bob popsicle quantity must be an integer";
		}
		else
		{
			$("#spongeBobQuantity").css("border", "1px solid #FCF");
		}
	}
	
	if(!(document.orderForm.orangeQuantity.value) && 
		!(document.orderForm.cherryQuantity.value) &&
		!(document.orderForm.grapeQuantity.value) &&
		!(document.orderForm.jollyRancherQuantity.value) &&
		!(document.orderForm.spongeBobQuantity.value))
		{
			if(!errorMessage)
			{
				document.orderForm.orangeQuantity.focus();
			}
			errorMessage += 	
				"\nThe Order must consist at least one popsicle";
		}

	if(errorMessage)
	{
		alert(errorMessage);
				
		return false;
	}
	else
	{
		return true;	
	}
}	