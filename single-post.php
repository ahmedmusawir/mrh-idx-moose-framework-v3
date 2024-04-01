<?php
 /**
  * The template for displaying all single posts
  *
  * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
  *
  * @package cyberize-app-dev
  */

 get_header();
?>

<main id="primary" class="site-main container">

  <div class="row">
    <div class="col-md-8 mx-auto">
      <?php
       while (have_posts()):
        the_post();

        get_template_part('template-parts/content', 'post');

        the_post_navigation(
         array(
          'prev_text' => '<span class="nav-subtitle badge badge-danger">' . esc_html__('NEXT:', 'cyberize-app-dev') . '</span> <span class="nav-title">%title</span>',
          'next_text' => '<span class="nav-subtitle badge badge-danger">' . esc_html__('PREVIOUS:', 'cyberize-app-dev') . '</span> <span class="nav-title">%title</span>'
         )
        );

        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()):
         //  comments_template();
        endif;

       endwhile; // End of the loop.
      ?>
    </div>
    <!-- <div class="col-md-4"> -->
    <?php //get_sidebar();?>
    <!-- </div> -->
  </div>

</main><!-- #main -->

<?php
get_footer();