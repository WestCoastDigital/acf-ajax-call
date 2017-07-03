jQuery(document).ready(function($) {
	
  // This is the id for the client select field
	clientSelectField = $('#acf-field_594b3d8a497ef');
	
	$(clientSelectField).change(function(){
		
		client_id = $(clientSelectField).val();
		
		$.ajax({
			url: ajaxurl,
            type: 'get',
			data:  { 
				action : 'get_address',
				client : client_id
			},			
			success: function( response ) {
				console.log(client_id);
			},
			error: function( error ) {
				console.log('Error');
			}
		});
	});
});
