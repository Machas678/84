canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 200;
car_1_height = 100;

background_image = "https://previews.123rf.com/images/c5media/c5media2007/c5media200700280/152031994-track-and-field-race-course-2.jpg";

car_1_image = "http://www.clker.com/cliparts/n/S/W/l/t/o/pink-car-top-view.svg";

car_1_x = 10;
car_1_y = 10;

car_2_width = 200;
car_2_height = 100; 

car_2_image = "http://www.clker.com/cliparts/f/E/H/H/s/n/pink-car-top-view-hi.png";

car_2_x = 10;
car_2_y = 150;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car_1_imgTag = new Image(); //defining a variable with a new image
	car_1_imgTag.onload = uploadCar1; // setting a function, onloading this variable
	car_1_imgTag.src = car_1_image;   // load image

    car_2_imgTag = new Image(); //defining a variable with a new image
	car_2_imgTag.onload = uploadCar2; // setting a function, onloading this variable
	car_2_imgTag.src = car_2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
	ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadCar2() {
	ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '87')
		{
			up_1();
			console.log("up");
		}
		if(keyPressed == '83')
		{
			down_1();
			console.log("down");
		}
		if(keyPressed == '65')
		{
			left_1();
			console.log("left");
		}
		if(keyPressed == '68')
		{
			right_1();
			console.log("right");
		}


function up_1()
{
	if(car_1_y >=0)
	{
		car_1_y = car_1_y - 10;
		console.log("When up arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		 uploadBackground();
		 uploadCar1();
         uploadCar2();
	}
}
function down_1()
{
	if(car_1_y <=500)
	{
		car_1_y =car_1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadCar1();
         uploadCar2();
	}
}
function left_1()
{
	if(car_1_x >= 0)
	{
		car_1_x =car_1_x - 10;
		console.log("When left arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadCar1();
         uploadCar2();
	}
}
function right_1()
{
	if(car_1_x <= 700)
	{
		car_1_x =car_1_x + 10;
		console.log("When right arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		uploadCar1();
        uploadCar2();
   }
}

if(keyPressed == '73')
		{
			up_2();
			console.log("up");
		}
		if(keyPressed == '75')
		{
			down_2();
			console.log("down");
		}
		if(keyPressed == '74')
		{
			left_2();
			console.log("left");
		}
		if(keyPressed == '76')
		{
			right_2();
			console.log("right");
		}


function up_2()
{
	if(car_2_y >=0)
	{
		car_2_y = car_2_y - 10;
		console.log("When up arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		 uploadBackground();
		 uploadCar2();
         uploadCar1();
	}
}
function down_2()
{
	if(car_2_y <=500)
	{
		car_2_y =car_2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadCar2();
         uploadCar1();
	}
}
function left_2()
{
	if(car_2_x >= 0)
	{
		car_2_x =car_2_x - 10;
		console.log("When left arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadCar2();
         uploadCar1();
	}
}
function right_2()
{
	if(car_2_x <= 700)
	{
		car_2_x =car_2_x + 10;
		console.log("When right arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadCar2();
        uploadCar1();
   }
}}

