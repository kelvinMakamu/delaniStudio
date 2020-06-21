/***********
	
	COMMONS

***************/
const iconsDescriptionWrapper="delani-what-we-do";
const portfolios= ['work1','work2','work3','work4','work5','work6','work7','work8'];
const alphaNumericPattern = /[^a-z\d]/i;
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const iconDescriptions =[
	{'name':'design','icon':'design_icon.png',
	'desc':'<p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.</p><p> Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p>'},
	{'name':'development','icon':'dev_icon.png',
	'desc':'<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.</p><p> They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>'},
	{'name':'product-management','icon':'product_icon.png',
	'desc':'<p>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.</p><p> This iterative process allows for changes as business requirements evolve.</p>'}
];

let validateContactForm = (c_name,c_email,c_message) =>{
	var isFormValid;
	if(validateInput(emailPattern,c_email)){
		if(!validateInput(alphaNumericPattern,c_name)){
			isFormValid=1002;//Empty name provided
		}else{
			if(!validateInput(alphaNumericPattern,c_message)){
				isFormValid=1003;//INvalid Message
			}else{
				isFormValid = 1000;
			}
		}
	}else{
		isFormValid = 1001;//Invalid Email Address
	}
	return isFormValid;
}

let validateInput = (pattern,input) => {
	return pattern.test(input);
}

let clearContactFormErrors = (inputType) =>{
	 switch(inputType){
	 	case 'email':
		document.getElementById("contact_email_error").innerHTML="";
	 	break;

	 	case 'name':
		document.getElementById("contact_name_error").innerHTML="";
	 	break;

	 	case 'message':
		document.getElementById("contact_message_error").innerHTML="";
	 	break;

	 	case 'all':
		document.getElementById("contact_name_error").innerHTML="";
		document.getElementById("contact_email_error").innerHTML="";
		document.getElementById("contact_message_error").innerHTML="";
	 	break;
	 }
}

let capitalizeEachWord = (sentence) => {
  return sentence.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};

let displayIconsDescriptions = () => {
	let content='';
	iconDescriptions.forEach( (description) =>{
			let descName=description.name;
			let descriptionName=descName.replace(/-/g,' ');
			let completeDesc=description.desc;
		  content+='<div class="col-md-4 col-lg-4 col-sm-12 text-center">'+
									'<div class="'+description.name+'">'+
										'<img src="assets/services_icons/'+description.icon+'">'+
										'<br/>'+
										'<p class="text-center" id="description_name">'+descriptionName.toUpperCase()+'</p>'+
									'</div>'+
									'<div id='+descName+' class="text-center icons-description"><h6 id='+descName+'-name">'
									+capitalizeEachWord(descriptionName)+'</h6><hr><p>'+completeDesc+'</p></div>'+
							'</div>';
	});
	$('#'+iconsDescriptionWrapper).html(content);
}

let toggleIconDescription = (task) =>{
	$("."+task).click(() =>{
	 	$("."+task).slideToggle();
	 	$("#"+task).slideToggle();
	});
	$("#"+task).click(() =>{
	 	$("."+task).slideToggle();
	 	$("#"+task).slideToggle();
	});
}
/***********
	
	UI/UX 

***************/
$(document).ready( () => {

	iconDescriptions.forEach((description) => {
		toggleIconDescription(description.name);
	});

	portfolios.forEach((portfolio) =>{
		$("."+portfolio).hover(() => {
			 $( "."+portfolio+"-project").show();
    },() => {
	    	$( "."+portfolio+"-project").hide();
    });
	});

	$("#delani_contact_form").submit((event) => {
     event.preventDefault();
     var c_name=$('#contact_name').val();
     var c_email=$('#contact_email').val();
     var c_message=$('#contact_message').val();
     clearContactFormErrors("all");
     switch(validateContactForm(c_name,c_email,c_message)){
     		case 1000:
     		alert("Yeah");
     		break;

     		case 1001:
     		$('#contact_email_error').show();
				document.getElementById("contact_email_error").innerHTML="Kindly provide a valid email address.";
     		break;

     		case 1002:
     		$('#contact_name_error').show();
				document.getElementById("contact_name_error").innerHTML="Kindly provide your name";
     		break;

     		case 1003:
     		$('#contact_message_error').show();
				document.getElementById("contact_message_error").innerHTML="Kindly provide contact message.";
     		break;
     }
  });

});