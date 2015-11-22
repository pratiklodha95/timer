window.onload = function(){
				var target_date = new Date("Dec 18, 2015").getTime();
				var current_date = new Date().getTime();
				var centiseconds_left = (target_date - current_date + 36000000)/10;
				CreateTimer("timer", centiseconds_left);
			}

			var Timer;
			var TotalcSeconds;


			function CreateTimer(TimerID, Time) {
				Timer = document.getElementById(TimerID);
				Timer1 = document.getElementById('Timer1');
				Timer2 = document.getElementById('Timer2');
				Timer3 = document.getElementById('Timer3');
				Timer4 = document.getElementById('Timer4');
				Timer5 = document.getElementById('Timer5');
				TotalcSeconds = Time;

				UpdateTimer()
				window.setTimeout("Tick()", 1);
			}

			function Tick() {
				if (TotalcSeconds <= 0) {
					alert("Time's up!")
					return;
				}

				TotalcSeconds -= 1;
				UpdateTimer()
				window.setTimeout("Tick()", 300);
			}
			 

			function UpdateTimer() {
				var target_date = new Date("Dec 18, 2015").getTime();
				var current_date = new Date().getTime();
				var centiseconds_left = (target_date - current_date + 36000000)/10;

				var cSeconds = TotalcSeconds;

				var cSeconds=centiseconds_left;
				var Days = Math.floor(cSeconds / 8640000);
				cSeconds -= Days * 8640000;
				var Hours = Math.floor(cSeconds / 360000);
				cSeconds -= Hours * (360000);
				var Minutes = Math.floor(cSeconds / 6000);
				cSeconds -= Minutes * (6000);
				var Seconds = Math.floor(cSeconds / 100);
				cSeconds -= Seconds * (100);

				var TimeStr = "<div class='timergroup'>"+"<div class='timer'>"+Math.floor(LeadingZero(Days)/10)+"</div>"+
					"<div class='timer'>"+LeadingZero(Days)%10+"</div>"+"<div class='time'>Days</div></div>"+
				"<div class='timergroup'>"+"<div class='timer'>"+Math.floor(LeadingZero(Hours)/10)+"</div>"+
				"<div class='timer'>"+LeadingZero(Hours)%10+"</div>"+"<div class='time'>Hours</div></div>"+
				"<div class='timergroup'>"+"<div class='timer'>"+Math.floor(LeadingZero(Minutes)/10)+"</div>"+
				"<div class='timer'>"+LeadingZero(Minutes)%10+"</div>"+"<div class='time'>Min</div></div>"+
				"<div class='timergroup'>"+"<div class='timer'>"+Math.floor(LeadingZero(Seconds)/10)+"</div>"+
				"<div class='timer'>"+LeadingZero(Seconds)%10+"</div>"+"<div class='time'>Sec</div></div>"+
				"<div class='timergroup'>"+"<div class='timer'>"+Math.floor(LeadingZero(Math.floor(cSeconds))/10)+"</div>"+
				"<div class='timer'>"+LeadingZero(Math.floor(cSeconds))%10+"</div>"+"<div class='time'>M.Sec</div></div>";
				Timer.innerHTML = TimeStr;
			}

			function LeadingZero(Time) {
				return (Time < 10) ? "0" + Time : + Time;
			}
