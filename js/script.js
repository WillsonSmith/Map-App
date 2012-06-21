var slider = new Swipe(document.getElementById('slider'), {

		startSlide: 1


	});
	
document.getElementById('slider').addEventListener('webkitTransitionEnd', function(){
		
	var xx = slider.getPos(),
		first = document.getElementById('first'),
		second = document.getElementById('second'),
		third = document.getElementById('third');
	//console.log(xx);
	
	if (xx === 0){
	
		first.style.background = 'black';
		second.style.background = 'gray';
		third.style.background = 'gray';
	
	}
	else if(xx === 1){
	
		first.style.background = 'gray';
		second.style.background = 'black';
		third.style.background = 'gray';
	
	}
	else if(xx === 2){
	
		first.style.background = 'gray';
		second.style.background = 'gray';
		third.style.background = 'black';
	
	}
		
});
	
	var xx = slider.getPos();

	//console.log(xx);


//prev&next
[].forEach.call( document.querySelectorAll('#prev'), function(el){

		el.addEventListener('click', function(){

			var xx = slider.getPos();

			slider.prev();

		}, false);

});

[].forEach.call( document.querySelectorAll('#next'), function(el){

		el.addEventListener('click', function(){

var xx = slider.getPos();

slider.next();

		}, false);

});
//end prev&next
		
		function getLatLon(){
			navigator.geolocation.getCurrentPosition(function(pos){
		
				var lat = pos.coords.latitude,
					lon = pos.coords.longitude,
					wid1 = window.innerWidth;
					image = 'http://maps.google.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=16&markers=' + lat + ',' + lon + '&size=' + wid1 + 'x' + wid1 + '&sensor=false',
					tag = document.getElementById('mapsimage'),
					store_item = document.getElementById('list'),
					list_maker = '<li>' + lat + ',' + lon + '</li>',
					
					counter = localStorage.getItem('counter'),
					xy = localStorage.getItem('coords' + counter);
						
						tag.src = image;
						
						console.log(wid1);
						
						if (counter == null){
							
							localStorage.setItem('counter', 0);
							counter = localStorage.getItem('counter');
							
						} else {
							
							for (i=1; i<=counter; i++){
								
								store_item.innerHTML += localStorage.getItem('coords' + i);
								
							}

						}
						
							localStorage.setItem('counter', parseFloat(counter)+1);

							counter = localStorage.getItem('counter');
							
							localStorage.setItem('coords' + counter, list_maker);
							
							//add if exists - don't do

							store_item.innerHTML += xy;
						
						
						$$('#destroy').on('tap', function(){
							
							for (i=1; i<=counter; i++){
								
								localStorage.removeItem('coords' + i);
								localStorage.removeItem('counter');
								
							}
							
							store_item.innerHTML = '';
						
						});
			
		});
		
		}
		
		getLatLon();
		
