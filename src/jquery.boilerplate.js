
$(document).ready(function(){
\		var i = 0;
		blocks = []
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
				$('#indicator').html('You have clicked block ' + block.text());
				block.addClass('unselected');
				block.removeClass('selected');
				    setTimeout(function(){
        		//fade back
       				 $('#indicator').html("");
    			}, 1000);
			}
		}

});
