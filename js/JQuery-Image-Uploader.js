
         
         function previewFile() {
             var preview = document.querySelector('img');
             var file    = document.querySelector('input[type=file]').files[0];
           var reader  = new FileReader();
         
           reader.onloadend = function () {
              
             preview.src = reader.result;
			  showpreview();
           }
        
           if (file) {
               
             reader.readAsDataURL(file);
           } else {
             preview.src = "";
           }
                
                 }
				 
				 
			
function showpreview(){
	//alert("hii");
      var imgleft = $("#crop-node").position().left;
            var imgtop = $("#crop-node").position().top;
            var imgwidth = $("#crop-node").width();
            var imgheight = $("#crop-node").height();
$("#imgpreview").html('<img id="imgpreview_img" src="' + $("#myimg").attr('src') + '" style="display:none" />');
         		var scale_x = $("#imgpreview").width() / imgwidth;
         		var scale_y = $("#imgpreview").height() / imgheight;
         		$("#imgpreview").css('position' ,'relative');
            	$("#imgpreview").css('overflow','hidden'); 
         		$('#imgpreview_img').css( 'position','absolute');
           		$('#imgpreview_img').css( 'display', 'block');
          		$('#imgpreview_img').css( 'left',(-imgleft * scale_x) + 'px');
            	$('#imgpreview_img').css( 'top',(-imgtop * scale_y) + 'px');
         		$('#imgpreview_img').css( 'width',($("#myimg").width() * scale_x) + 'px');
         		$('#imgpreview_img').css( 'height',($("#myimg").height() * scale_y) + 'px');
    	overimage();
}
        
           function overimage(){
          var totalw = $("#mydiv").width();
           var totalh = $("#mydiv").height();
           var divltop = $("#mydiv").position().left;
           var divrtop = divltop + totalw;
           var cropnodetop = $("#crop-node").position().top;
           var cropnodeleft = $("#crop-node").position().left;
           var leftwidth = (cropnodeleft -  divltop);
           var rightwidth = totalw - ( leftwidth + $('#crop-node').width());
          
           
           
          $(".block-l").css({top: cropnodetop ,height: $('#crop-node').height(), width: leftwidth+8});
          	  $(".block-r").css({top: cropnodetop ,height: $('#crop-node').height(), width: rightwidth-8});
           $(".block-t").css({height: cropnodetop});
         //  alert(totalh - cropnodetop);
            $(".block-b").css({height: totalh - (cropnodetop + $('#crop-node').height())});
           
         
         }
		 
		 (function($) {

		$.fn.Imageuploader = function() {
						 $("#myimg").after("<div id='crop-node'><div class='ui-resizable-handle ui-resizable-nw'></div><div class='ui-resizable-handle ui-resizable-ne'></div>\
	 <div class='ui-resizable-handle ui-resizable-sw'></div><div class='ui-resizable-handle ui-resizable-se'></div><div class='ui-resizable-handle ui-resizable-n'></div>\
	 <div class='ui-resizable-handle ui-resizable-s'></div> <div class='ui-resizable-handle ui-resizable-e'></div><div class='ui-resizable-handle ui-resizable-w'></div>\
	 </div><div class='block block-l'></div><div class='block block-t'></div><div class='block block-r'></div><div class='block block-b'></div>");
	 $("#mydiv").after("<input type='file' name='myfile' id='myfile'  onchange='previewFile()'><br />");
	 /*showpreview();*/
	
     
         
          $('#crop-node').draggable({containment: '#mydiv'});
          $('#crop-node').resizable({
			  containment: '#mydiv',
           handles: {
               'nw': '.ui-resizable-nw',
               'ne': '.ui-resizable-ne',
               'sw': '.ui-resizable-sw',
               'se': '.ui-resizable-se',
               'n': '.ui-resizable-n',
               'e': '.ui-resizable-e',
               's': '.ui-resizable-s',
               'w': '.ui-resizable-w'
           }
         });
          
         
      $("#crop-node").on('drag',function(e){
         showpreview();
           });
     $("#crop-node").bind('resize', function(){
                 showpreview()
         });
		}
		}(jQuery));// JavaScript Document