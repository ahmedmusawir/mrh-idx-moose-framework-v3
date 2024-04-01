<?php
/**
 * The template for displaying all pages
 * Template Name: UT WP Loop Test
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

  <section class="wp-loop">
    <?php 
      $args = array(
        'post_type' => 'post',
        'posts_per_page' => 10,
        'category__in' => [39],
        'tax_query' => [
          [
            'taxonomy' => 'states',
            'field' => 'slug',
            'terms' => ['florida', 'miami'],
            'operator' => 'NOT IN',
          ],
        ],
      );


      // $args = [
      //   'post_type' => 'post',
      //   'posts_per_page' => 10,
      // ];

      // $args = array(
      //   'post_type' => 'post',
      //   'posts_per_page' => 10,
      //   'category__in' => [39], //App Dev
      //   // 'category__in' => [4], //Tutoring
      //   'tax_query' => [
      //     'relation' => 'AND',
      //     [
      //       'taxonomy' => 'states',
      //       'field' => 'slug',
      //       'terms' => ['florida'],
      //     ],
      //     [
      //       'taxonomy' => 'states',
      //       'field' => 'slug',
      //       'terms' => ['tampa'],
      //     ],
      //   ],
      // );


      $query = new WP_Query( $args );

      if ( $query->have_posts() ) {
        
        while ( $query->have_posts() ) {
          $query->the_post();

          // CITY & STATE TAXONMY DISPLAY BY LIST START
          $tax = get_the_terms( get_the_ID(), 'states');
          // echo '<pre>';
          // print_r($tax);
          // echo '</pre>';
          foreach( $tax as $term ) {
            if ( $term->parent == 0 ) {
              // echo '<br>State: ' . $term->name;
              $current_state = $term->name;
            } else {
              $current_city = $term->name;
            }
          } 

          echo '
          <p class="text-dark text-uppercase" style="font-size: .8rem; margin-bottom: 0;">
            <small class="font-weight-bold">City: 
              <span class="text-info">' . $current_city .',</span> State: <span class="text-info">' . $current_state .'</span>
            </small>
          </p>';

          the_content();
          the_ID();
          // SHOW STATE & CITY IN A PARENT CHILD ORDER
          // print_taxonomy_ranks( get_the_terms( get_the_ID(), 'states' ) );


          $cats = get_the_category();
          foreach( $cats as $cat ) {
            if ( $cat->parent == 0 ) {
              // echo '<br>State: ' . $cat->name;
              $current_main_cat = $cat->name;
            } 
          }
          echo '<pre>';
          // print_r($cats);
          // print_r($cats[0]->name);
          echo $current_main_cat;
          echo '</pre>';
          
        }
      } else {

        echo 'No Post Found ...';
        
      }
    ?>
  </section>

</main><!-- #main -->

<?php
get_footer();