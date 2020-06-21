/***********
	
	COMMONS

***************/
const iconsDescriptionWrapper="delani-what-we-do";
const portfolios= ['work1','work2','work3','work4','work5','work6','work7','work8'];

const iconDescriptions =[
	{'name':'design','icon':'design_icon.png',
	'desc':'<p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.</p><p> Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p>'},
	{'name':'development','icon':'dev_icon.png',
	'desc':'<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.</p><p> They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>'},
	{'name':'product-management','icon':'product_icon.png',
	'desc':'<p>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.</p><p> This iterative process allows for changes as business requirements evolve.</p>'}
];

var capitalizeEachWord = (sentence) => {
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

});