<?php
add_action('wp_ajax_nopriv_test_wp_ajax_function', 'test_wp_ajax_function');
add_action('wp_ajax_test_wp_ajax_function', 'test_wp_ajax_function');

function test_wp_ajax_function()
{

 $post_args = $_POST['newPostData'];

 // PREPARING POST ARGS
 $args = [
  'post_title'   => $post_args['title'],
  'post_content' => sanitize_text_field($post_args['content']),
  'post_status'  => $post_args['status']
 ];

 // INSERTING LIST
 $post_id = wp_insert_post($args);

//  $response = [
 //   'title'   => $new_post['title'],
 //   'content' => $new_post['content'],
 //   'status'  => $new_post['status'],
 //   'id'      => $post_id
 //  ];

 wp_send_json_success($post_id);

 wp_die();
}