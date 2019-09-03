function validation()
{
	
	var pass = document.getElementById('pass').value;
	
	var email = document.getElementById('email').value;


	


	 if(pass=="")
	{
		document.getElementById("passspan").innerHTML = "*** Please fill the Password field ***";
		return false;
	}
	 if(pass.length <=5 || pass.length>20)
	{
		document.getElementById("passspan").innerHTML = "*** Password must be between 6 and 20 ***";
		return false;
	}







	





	 
	
	 if(email=="")
	{
		document.getElementById("emailspan").innerHTML = "*** Please fill the email field ***";
		return false;
	}

	




	//  if(email=="")
	// {
	// 	document.getElementById("emailspan").innerHTML = "*** Please fill the email field ***";
	// 	return false;
	// }
	//  if(email.indexOf('@') <=0)
	// {
	// 	document.getElementById("emailspan").innerHTML = "*** please enter correct email id ***";
	// 	return false;
	// }
	//  if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
	// 	{
	// 	document.getElementById("emailspan").innerHTML = "*** please enter correct email id ***";
	// 	return false;
	// }
	
}