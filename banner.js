var ban = (function () {
	var content = `<div class="slider" id="slider">
				<div class="slide"><img src="img/b5.png" alt=""></div>
				<div class="slide"><img src="img/b1.png" alt=""></div>
				<div class="slide"><img src="img/b2.png" alt=""></div>
				<div class="slide"><img src="img/b3.png" alt=""></div>
				<div class="slide"><img src="img/b4.png" alt=""></div>
				<div class="slide"><img src="img/b5.png" alt=""></div>
				<div class="slide"><img src="img/b1.png" alt=""></div>
			    </div>
			    <span id="left"><</span>
			    <span id="right">></span>
			    <ul class="nav" id="navs">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			    </ul>`;
	$("#box").html(content);
	$("li").eq(0).addClass("active");

	var left = -1200;
	var timer = setInterval(autoGo, 3000);
	var flag = true;
	var index=0;
	function autoGo() {
		if($(".slider").css("left")==left+"px"){
			flag=true;
		}
		if (flag) {
			flag = false;
			left -= 1200;
			if (left == -8400) {
				left = -2400;
				$(".slider").css({
					"left": "-1200px",
					"transition": ""
				});
				if ($(".slider").css("left") == "-1200px") {
					$(".slider").css({
						"left": "-2400px",
						"transition": "left 2000ms"
					});
					index++;
					$("li").eq(index).css({
						"background":"red",
						"color":"white"
					}).siblings("li").css({
						"background":"#ccc",
						"color":""
					});
				}
			} else {
				index++;
				if(index==5){
					index=0;
				}
				$("li").eq(index).css({
					"background":"red",
					"color":"white"
				}).siblings("li").css({
					"background":"#ccc",
					"color":""
				});
				$(".slider").css({
					"left": left + "px",
					"transition": "left 2000ms"
				})
			}
		}
	};
	$("#right").click(autoGo);
	$("#left").click(function(){
		if($(".slider").css("left")==left+"px"){
			flag=true;
		}
		if (flag) {
			flag = false;
			left += 1200;
			if (left == 0) {
				left = -6000;
				$(".slider").css({
					"left": "-7200px",
					"transition": ""
				});
				if ($(".slider").css("left") == "-7200px") {
					$(".slider").css({
						"left": "-6000px",
						"transition": "left 2000ms"
					});
					index--;
					if(index==-1){
						index=4;
					}
					$("li").eq(index).css({
						"background":"red",
						"color":"white"
					}).siblings("li").css({
						"background":"#ccc",
						"color":""
					});
				}
			} else {
				index--;
				if(index==-1){
					index=4;
				}
				$("li").eq(index).css({
					"background":"red",
					"color":"white"
				}).siblings("li").css({
					"background":"#ccc",
					"color":""
				});
				$(".slider").css({
					"left": left + "px",
					"transition": "left 2000ms"
				})
			}
		}
	});

	for(let i=0;i<$("li").length;i++){
		$("li").eq(i).click(function(){
			$("li").eq(i).css({
				"background":"red",
				"color":"white"
			}).siblings("li").css({
				"background":"#ccc",
				"color":""
			})
			index=i;
			left=-1200*(1+i);
			$(".slider").css({
				"left": left + "px",
				"transition": "left 1000ms"
			})
		});
	};

	$("ul li").css({ "list-style": "none" });
	$(".box").css({
		"width": "1200px",
		"height": "380px",
		"margin": "0 auto",
		"margin-top": "10px",
		"position": "relative",
		"overflow": "hidden"
	});
	$(".slider").css({
		"width": "8400px",
		"position": "absolute",
		"left": "-1200px"
	});
	$(".slide").css({
		"width": "1200px",
		"overflow": "hidden",
		"float": "left"
	});
	$(".box>span").css({
		"display": "block",
		"width": "30px",
		"height": "50px",
		"text-align": "center",
		"cursor": "pointer",
		"color": "#fff",
		"top": "175px",
		"line-height": "50px",
		"background": "rgb(255,0,0)",
		"font-size": "30px",
		"position": "absolute",
		"opacity": "0"
	});
	$("#left").css({
		"left": "30px"
	});
	$("#right").css({
		"right": "30px"
	});
	$(".nav").css({
		"position": "absolute",
		"left": "500px",
		"bottom": "20px"
	});
	$(".nav>li").css({
		"float": "left",
		"width": "20px",
		"height": "20px",
		"line-height": "20px",
		"text-align": "center",
		"background": "#ccc",
		"cursor": "pointer",
		"margin": "0 10px",
		"border-radius": "50%"
	});
	$(".nav .active").css({
		"background": "red",
		"color": "white"
	});
	$("#box").mouseenter(function () {
		$(".box>span").css({
			"opacity": "0.5",
			"transition": "opacity 1000ms"
		});
		clearInterval(timer);
	});

	$("#box").mouseleave(function () {
		$(".box>span").css({
			"opacity": "0",
			"transition": "opacity 1000ms"
		});
		timer = setInterval(autoGo, 3000);
	});
})();