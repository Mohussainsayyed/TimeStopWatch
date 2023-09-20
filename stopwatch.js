		let hr = 0;
		let min = 0;
		let sec = 0;
		let count = 0;
		
		let timer = false;
		
		function start(){
		timer = true;
		stopwatch();
		
		}
		
		function stop(){
		timer = false;
		}
		
		function reset(){
		timer = false;
		hr = 0;
		min = 0;
		sec = 0;
		count = 0;
		
		document.getElementById("count").innerHTML = "00";
		document.getElementById("sec").innerHTML = "00";
		document.getElementById("min").innerHTML = "00";
		document.getElementById("hr").innerHTML = "00";
		}
		
		function stopwatch(){
		
		
			if(timer == true){
				if(count == 99){
				sec = sec + 1;
				count = 0;
				}
				
				if(sec == 60){
				min = min + 1;
				sec = 0;
				}
				
				if(min == 60){
				hr = hr + 1;
				min = 0;
				}
				
				count = count + 1;
				
				let chr = hr;
				let cmin = min;
				let csec = sec;
				let ccount = count;
				
				if(hr < 10){
				chr = "0" + chr;
				}
				
				if(min < 10){
				cmin = "0" + cmin;
				}
				
				if(sec < 10){
				csec = "0" + csec;
				}
				
				if(count < 10){
				ccount ="0" + ccount;
				}
				
				
				document.getElementById("count").innerHTML = ccount;
				document.getElementById("sec").innerHTML = csec;
				document.getElementById("min").innerHTML = cmin;
				document.getElementById("hr").innerHTML = chr;
				
				setTimeout("stopwatch()",10);
			}
		}