<?php
 /**
  * The template for displaying all pages
  * Template Name: OOP PHP TEST 1
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
<?php
 //  My_Utils::show_loop([1, 2, 3]);
 $moose_test = new My_Moose_Test(1, 'All is well...');
 $calculator = new My_Calculator(1, 2, 'whatever');

 //  require 'D:/_A_LOCAL_SITES/OOP_PHP/app/public/wp-content/themes/cyberize-app-dev-V9/_classes/oop_calculator/My_Utils.php';

 //  require get_theme_file_path('/_functions/autoloader/class-autoloader.php ');
 //  require get_theme_file_path('/_classes/My_Moose_Test.php ');
 //  echo get_theme_file_path('/_classes/My_Moose_Test.php ');

 //  require get_theme_file_path('/_classes/oop-calculator/My_Utils.php ');
 //  echo get_theme_file_path('/_classes/oop-calculator/My_Utils.php ');
 //  echo '<hr>';

 //  echo 'D:\_A_LOCAL_SITES\OOP_PHP\app\public/wp-content/themes/cyberize-app-dev-V9/_classes/My_Moose_Test.php';
 //  require 'D:\_A_LOCAL_SITES\OOP_PHP\app\public/wp-content/themes/cyberize-app-dev-V9/_classes/My_Moose_Test.php';

 //  echo 'D:\_A_LOCAL_SITES\OOP_PHP\app\public/wp-content/themes/cyberize-app-dev-V9/_classes/oop-calculator/My_Utils.php';
 //  require 'D:\_A_LOCAL_SITES\OOP_PHP\app\public/wp-content/themes/cyberize-app-dev-V9/_classes/oop-calculator/My_Utils.php';

 //  $path = get_theme_file_path() . '/_classes/';
 //  echo $path;

?>

<main id="primary" class="site-main container">

  <header id="header-test" class="site-header container py-5 text-center">

    <h1>OOP PHP IN WP</h1>
    <hr>

  </header><!-- #masthead -->
  <div class="code row">
    <section class="col-md-4">

      Col 1
      <hr class="bg-danger">
      <?php $moose_test->get_message();?>
    </section>
    <section class="col-md-4">

      Col 2

      <?php My_Utils::show_nice($moose_test->get_my_post()->post_date);?>
      <?php My_Utils::show_nice($moose_test->get_my_post()->post_title);?>
      <?php My_Utils::show_nice($moose_test->get_my_post()->post_content);?>
      <?php My_Utils::show_nice($moose_test->get_my_post()->post_status);?>
      <?php My_Utils::show_nice($moose_test->get_my_post());?>
    </section>
    <section class="col-md-4">

      Col 3

      <?php My_Utils::show_nice($moose_test->get_my_cats());?>
      <?php My_Utils::show_loop($moose_test->get_my_cats());?>


    </section>
  </div>

</main><!-- #main -->


<?php
get_footer();