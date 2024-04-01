<?php
/**
 * INSERT MULTI LEVEL CATEGORIES WITH AJAX
 */

add_action('wp_ajax_nopriv_test_wp_ajax_function', 'test_wp_ajax_function');
add_action('wp_ajax_test_wp_ajax_function', 'test_wp_ajax_function');

function test_wp_ajax_function()
{

 $post_id = $_POST['post_id'];

 echo "<h4>New List ID: $post_id</h4><br>";

 // $the_post = get_post($post_id);

 // echo '<pre>';
 // echo print_r($the_post);
 // echo '</pre>';

//  $args = [
 //   'post_type'   => 'post',
 //   'post_status' => 'pending',
 //   'p'           => $post_id
 //  ];

//  $the_list = new WP_Query($args);

//  if ($the_list->have_posts()):

//   while ($the_list->have_posts()): $the_list->the_post();

//   endwhile;

//  endif;

 die();
}
