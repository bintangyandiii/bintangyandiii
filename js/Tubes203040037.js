// non jQuery
	// fungsi setelah pass dan username dimasukan
	function login(){ 
		var getusername = document.getElementById('username').value;
		var getpassword = document.getElementById('password').value;

		if(getusername == "guest" || getusername == "GUEST" && getpassword === "guest12345"){
			alert("(: selamat datang bintang :)");
			document.location.href = "index(login).html";
		}else if(getusername === "" && getpassword === ""){
			alert("you must enter the username and password, to see it please click on the 'forgot password' link");
		}else{
			alert("kamu pasti bukan BINTANG maka silakan pergi atau tanyakan kepada BINTANG");
		}
	}

	function logout(){
		document.location.href = "index(logout).html";
	}

	// menampilkan kolom untuk login
	function masuklogin(aksi, id){
		if (aksi === "tampilkan"){
			document.getElementById('halamanlogin').style.display="block";
		} else if (aksi === "sembunyi"){
			document.getElementById('halamanlogin').style.display="none";
		}
	}

	// menampilkan halaman upload portofolio
	function uploadportofolio(aksi){
		if(aksi === "login"){
			alert("please login to use this function");
		}else{
			document.location.href = "index(uploadportofolio).html";
		}
	}
// end none jQuery



// with jQuery
	// smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
// end with jQuery

//skill

let options = {
	startAngle: -1.55,
	size: 150,
	value: 0.85,
	fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
	$(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".1 .bar").circleProgress({
	value: 0.50
  });
  $(".2 .bar").circleProgress({
	value: 0.45
  });