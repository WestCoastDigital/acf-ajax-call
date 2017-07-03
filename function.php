<?php

function get_client_id() {

	$client_id = $_GET('client');
	
	return $client_id;
	
}
add_action( 'wp_ajax_get_address', 'get_client_id' );

function display_client_location() {
	
	echo get_client_id();
	
}
add_action('woocommerce_checkout_before_customer_details', 'display_client_location');
