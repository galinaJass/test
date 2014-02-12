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
		
		$(document).ready(function(){
			$('.lastNameError').click(function () {
				$(this).css('display', 'inline');
			});
			/*http://api.jquery.com/css/*/
		});		
		
		/*$(document).ready(function(){
			$(function(){
				var lastNameLength = $("#lastName").val().length;
				if(lastNameLength == 0){
					$(this).next('.error').css('display', 'inline');
					$(this).change(function(){
						$(this).next('.error').css('display', 'none');
				});
				}
			});
		});*/
		
		errorMessage += "\nLast Name is required";
	}
	
	if(!document.orderForm.firstName.value)
	{
		if(!errorMessage)
		{
			document.orderForm.firstName.focus();
		}	
		errorMessage += "\nFirst Name is required";
	}
	
	if(!document.orderForm.email.value)
	{
		if(!errorMessage)
		{
			document.orderForm.email.focus();
		}
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
			errorMessage += "\nE-mail must be entered as " + 
			"myEmail@hotmail.com and can not consist space or , or ; " + 
			"characters";
		}
	}
	
	if(!document.orderForm.phoneNumber.value)
	{
		if(!errorMessage)
		{
			document.orderForm.phoneNumber.focus();
		}
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
			errorMessage += "\nPhone Number must consist of number " +
			"and/or charaters ()., or space";
		}
	}
	
	if(!document.orderForm.streetNumber.value)
	{	
		if(!errorMessage)
		{
			document.orderForm.streetNumber.focus();
		}
		errorMessage += "\nStreet number is required";
	}
	
	if(!document.orderForm.street.value)
	{
		if(!errorMessage)
		{
			document.orderForm.street.focus();
		}
		errorMessage += "\nStreet is required";
	}
	
	if(!document.orderForm.postalCode.value)
	{
		if(!errorMessage)
		{
			document.orderForm.postalCode.focus();
		}
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
			errorMessage += "\nPostal Code must be entered as A2A 2A2";
		}
	}
	
	if(!document.orderForm.city.value)
	{
		if(!errorMessage)
		{
			document.orderForm.city.focus();
		}
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
			errorMessage += "\nCity must be as least 3 " + 
					"letters in length";
		}
	}
	
	if(document.orderForm.province[0].selected)
	{
		errorMessage += "\nSelect the Province";
	}
	
	if(!document.orderForm.country.value)
	{
		if(!errorMessage)
		{
			document.orderForm.country.focus();
		}
		errorMessage += "\nCountry is required";
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
			errorMessage += "\nOrange popsicle quantity must be an integer";
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
			errorMessage += "\nCherry popsicle quantity must be an integer";
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
			errorMessage += "\nGrape popsicle quantity must be an integer";
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
			errorMessage += 
				"\nJolly Rancher popsicle quantity must be an integer";
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
			errorMessage += 
				"\nSponge Bob popsicle quantity must be an integer";
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