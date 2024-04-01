<?php
 /**
  * The template for displaying all pages
  * Template Name: THE TEAM PAGE
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
?>

<main id="primary" class="site-main container">

  <section id="team-page-content" class="team-page-content container py-5">

    <div class="team-page-header row">
      <div class="col-sm-12 col-md-12 col-lg-6 left-col">
        <article class="image-content">
          <img src="/wp-content/uploads/2022/08/1706-Oxford-drawing-V1.jpg
          " alt="">

        </article>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 right-col  d-flex align-items-center">
        <article class="text-content">
          <h1>MEET THE TEAM</h1>

          <div class="btn-container row">
            <div class="button button-top col-sm-12 col-md-12 col-lg-6">
              <a href="https://go.oncehub.com/HOUSEforPURCHASE" target="_blank" class="btn btn-warning btn-block left-btn">BOOK A CONSULTATION</a>
            </div>
            <div class="button button-top col-sm-12 col-md-12 col-lg-6">
              <a href="https://c5mw9y8c.pages.infusionsoft.net/?cookieUUID=789d971b-19d7-4c7e-9f2e-38ea225252c1&affiliate=0"  target="_blank" class="btn btn-warning btn-block  right-btn">How much will my house will be purchased
                for?</a>

            </div>
          </div>

        </article>

      </div>
    </div>

    <div class="team-page-agent-list">
      <div class="agent-list-container">

        <?php
         $args = array(
          'post_type' => 'post'
         );

         $query = new WP_Query($args);

         if ($query->have_posts()) {

          while ($query->have_posts()) {
           $query->the_post();
          ?>

        <article class="agent-list-box">
          <div class="text-content">

            <h2 class="agent-name">
              <?php the_title();?>
            </h2>
            <h4 class="agent-title">
              <?php the_field('agent_title');?>
            </h4>
            <hr class="bg-light">

            <div class=agent-description>
              <?php the_excerpt();?>
            </div>
            <!-- <div class="button-container">
              <a href="#" class="btn btn-dark btn-sm">Read More</a>
            </div> -->

          </div>
        </article>
        <?php

          }
         } else {

          echo 'No Post Found ...';

         }

        ?>


      </div>
    </div>


  </section><!-- #masthead -->

</main><!-- #main -->


<?php
get_footer();