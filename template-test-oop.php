<?php
 /**
  * The template for displaying all pages
  * Template Name: TEST OOP PHP
  * This is the template that displays all pages by default.
  * Please note that this is the WordPress construct of pages
  * and that other 'pages' on your WordPress site may use a
  * different template.
  *
  * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
  *
  * @package cyberize-app-dev
  */

 get_header();

 use Cyber\Test\TestOopWp;
 use Cyber\Utils\Utils;

?>
<main id="primary" class="site-main container">

  <header id="header-test" class="site-header container py-5 text-center">

    <h1>TEST OOP PHP ON WORDPRESS</h1>
    <hr class="bg-dark">

  </header><!-- #masthead -->

  <?php
   $test_obj = new TestOopWp('All is well...', 38);
  ?>

  <div class="row">
    <section class="col-md-4">Col1

      <hr class="bg-danger">
      <?php $test_obj->get_message();?>

    </section>
    <section class="col-md-4">Col2

      <?php $post_obj = $test_obj->get_my_post();?>

      <?php Utils::show_nice($post_obj->post_date);?>
      <?php Utils::show_nice($post_obj->post_title);?>
      <?php Utils::show_nice($post_obj->post_content);?>
      <?php Utils::show_nice($post_obj->post_status);?>

      <?php Utils::show_nice($post_obj);?>

    </section>
    <section class="col-md-4">Col3

      <?php $cat_obj = $test_obj->get_my_cats();?>
      <?php Utils::show_loop($cat_obj);?>
      <?php Utils::show_nice($cat_obj);?>

    </section>
  </div>

</main><!-- #main -->


<?php
get_footer();