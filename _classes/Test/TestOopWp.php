<?php
/**
 * TEST OOP PHP ON WORDPRESS
 */
namespace Cyber\Test;

class TestOopWp
{
 public $message;
 public $post_id;

 public function __construct($message, $post_id)
 {
  $this->message = $message;
  $this->post_id = $post_id;

 }

 public function get_message()
 {

  echo '<h3>Message from Frontend: <br>' . $this->message . '</h3>';

 }

 public function get_my_post()
 {

  $my_post = get_post($this->post_id);

  return $my_post;

 }

 public function get_my_cats()
 {

  $my_cat = get_terms('category');

  return $my_cat;

 }

}