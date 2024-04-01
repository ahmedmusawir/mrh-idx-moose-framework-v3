<?php
/**
 * INSERT MULTI LEVEL CATEGORIES WITH AJAX
 */

add_action('wp_ajax_nopriv_test_wp_ajax_function', 'test_wp_ajax_function');
add_action('wp_ajax_test_wp_ajax_function', 'test_wp_ajax_function');

function test_wp_ajax_function()
{

 $post_id  = $_POST['post_id'];
 $response = get_post($post_id);

//  $response = [
 //   'working' => true,
 //   'data1'   => 'My data 1',
 //   'data2'   => 'My data 2'
 //  ];

 wp_send_json_success($response);

 wp_die();
}
