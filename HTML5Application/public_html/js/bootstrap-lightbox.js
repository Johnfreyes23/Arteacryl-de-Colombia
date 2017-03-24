/*!
* bootstrap-lightbox.js v0.6.1
* Copyright 2013 Jason Butz
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
