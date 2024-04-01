<?php
/**
 * The template for displaying all pages
 * Template Name: City State Ajax
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cyberize-app-dev
 */

get_header('ut');
?>



<main id="primary" class="site-main container">

  <?php 
    /**
     * CATEGORY INSERT TEST
     */
    $parent_term = term_exists( 'A App Dev', 'category' ); // array is returned if taxonomy is given
    $parent_term_id = $parent_term['term_id'];  // get numeric term id

     $cat_insert_result = wp_insert_term(
      'Child A App Dev',   // the term 
      'category', // the taxonomy
      array(
          'description' => 'This is a Child Category',
          'parent'      => $parent_term_id,
      )
    );
    echo 'New Category Inserted :';
    echo "<pre>";
      print_r($cat_insert_result);
    echo "</pre>";
?>

</main><!-- #main -->

<?php
get_footer();