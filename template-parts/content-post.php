<?php
 /**
  * Template part for displaying posts
  *
  * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
  *
  * @package cyberize-app-dev
  */

?>

<article id="post-<?php the_ID();?>" <?php post_class();?>>
  <header class="entry-header">
    <?php
     if (is_singular()):
      the_title('<h1 class="entry-title text-danger">', '</h1>');
     else:
      the_title('<h5 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h5>');
     endif;
    ?>

    <h5 class="agent-job-title text-danger font-weight-bold text-uppercase"><?php the_field('agent_title')?></h5>

    <?php

     if ('post' === get_post_type()):
    ?>
    <div class="entry-meta mb-3">
      <span class="mr-2"><?php //cyberize_app_dev_posted_on();?></span>
      <span><?php //cyberize_app_dev_posted_by();?></span>
    </div><!-- .entry-meta -->
    <?php endif;?>
  </header><!-- .entry-header -->

  <figure class="mb-3">
    <?php cyberize_app_dev_post_thumbnail('full');?>
  </figure>

  <div class="entry-content">
    <?php
     the_content();
    ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer">
    <?php //cyberize_app_dev_entry_footer(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID();?> -->