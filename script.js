
$(document).ready(function(){
		var i = 0;
		blocks = []

    	var currentMousePos = { x: -1, y: -1 };
    	$(document).mousemove(function(event) {
        	currentMousePos.x = event.pageX;
        	currentMousePos.y = event.pageY;
   		});
		//click to generate new div, default to unselected
		$("#element").click(function(e) {
		    var a = $('<div/>');
		    a.attr({
		        'id' : i
		    }).append(
		    	i
		    ).addClass('icon unselected').css({
		        'top' : e.pageY + 20,
		        'left' : e.pageX + 20,
		        'height': 50 + Math.random()*50,
		        'width': 50 + Math.random()*50
		    }).appendTo('#element').on('mouseover',function() {
		    	handleSwitch(a);
			});
		    a.draggable();
			i++;
			blocks.push(a);
		});

		var handleSwitch = function(block){
			if( block.hasClass('unselected')){
				jQuery.each(blocks,function(index, value){
					value.removeClass('selected');
				});
				jQuery.each(blocks,function(index, value){
					value.removeClass('unselected');
				});						
				jQuery.each(blocks,function(index, value){
					value.addClass('unselected');
				});			
				block.addClass('selected');
				block.removeClass('unselected');
			} else if ( block.hasClass('selected')) {
				click = false;

				setTimeout(function(){
   					var el = document.elementFromPoint(currentMousePos.x, currentMousePos.y);
   					click = (el == block[0]);


					if(click){
						$('#indicator').html('You have clicked block ' + block.text());
						block.addClass('unselected');
						block.removeClass('selected');
						setTimeout(function(){
		       				 $('#indicator').html("Click to make blocks. Enter with the cursor to highlight, then re-enter for 300ms to click.");
		    			}, 2000);
	    			}
				}
				,300);


			}
		}

});
