 
	function check_email(){
  // block submit button
		$('#submitlsignup').off('click');
	//check email
	var	email   = $('#signupemail').val();
	if(email==""){	
		$('.error-show').text("Please Enter your email address").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
		active_signup();
			 
	}
	else{
	  regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    $('.error-show').text("Please Enter valid email address").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
	active_signup();
  }else{
    //check if email already used
	let mydata = "email="+email; 
 	$.ajax({
		type: 'POST',
		url: 'http://localhost:9004/users/check_email',
		data: mydata,
		 
	}).done(function(data){
		data = parseInt(data);
		 alert(data);
		if(data > 0){
			$('.error-show').text("email already in use").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			active_signup();
return;
		}
		if(data==0){
			
			
			validate_signup(email);
			
		}
	});
	
 

 }
	
	}
 
	 
	  
	  
	  }
	
	function active_signup(){ 
		$('#submitlsignup').on('click',function(){
		validate_signup();  });
		}

	function validate_signup(email){
	 
		
		var	username = $('#signupname').val();
		//var	email   = $('#signupemail').val();
		var	password = $('#signuppassword').val();
		var	gender = $('#gender').val();
		var	collegeid = $('#signupcollegeid').val();
		var	address = $('#signupaddress').val();
		var	course = $('#course').val();
		var	semester = $('#semester').val();
		var	college_name = $('#signupcollegename').val();
		
	
		

		 
		if(username==""){
			$('.error-show').text("please  enter your name").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			
			active_signup();
			return;
		 }
		 if(password=="" || password.length <6){
			$('.error-show').text("please  enter valid password! Password lenght should be greater than 5").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			active_signup();
			return;
			 
		}
		
		if(collegeid==""){
			$('.error-show').text("please  enter your college id").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			active_signup();
			return;
		}
		
		if(address==""){
			$('.error-show').text("please  enter your address").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			active_signup();
			return;
		}
		
		if(college_name==""){
			$('.error-show').text("please  enter your college name").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
			active_signup();
			return;
		}
		
		//if every thing is right
		
		var mydata="username="+username+"&password="+password+"&email="+email+"&gender="+gender+"&collegeid="+collegeid+"&address="+address+"&course="+course+"&semester="+semester+"&college_name="+college_name;
		
		$.ajax({
				type: 'POST',
				url: 'http://localhost:9004/users/create_account',
				data: mydata
			}).done(function(data){
				if(data = "error"){
					$('.error-show').text("technical issue! please try again").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
					
					active_signup();
				}
				if(data="ok"){
					$('.error-show').text("successfully registered please login").css("display","inline-block").fadeOut(4000,()=>{$('.error-check').css("display","none");});
					$('.fixed-signup').fadeOut(4000,()=>{
						$('.fixed-signup').css("display","none");
						$('.fixed-login').css("display","block").fadeIn(4000);
					});
				}
			});
		
		
			
	 
 

}
	
	
	
	

	


 $(document).ready(function(){

//	document.getElementById('clear-form1').reset();
 
 currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
   item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

 autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('#next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('#prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});






$('#loginpopup').click(function(){
	$('.fixed-login').css("display","block");
});
	
$('#cancellogin').click(function(){
	$('.fixed-login').css("display","none");

});
	
	
	
$('#signuppopup').click(function(){
$(".fixed-signup").css("display","block");
});	
	
	
$('#cancelsignup').click(function(){
	 $('.fixed-signup').css("display","none");
});	

	
	
$('#submitlsignup').on('click',function(){
	 
	
	check_email()  });	
	
	});
 