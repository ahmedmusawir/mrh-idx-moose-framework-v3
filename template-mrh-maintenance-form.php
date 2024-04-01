<?php
/**
 * The template for displaying all pages
 * Template Name: MRH Maintenance
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

    <style>
    .popupheading {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .popupheading h3 {
        font-family: "Lato", sans-serif;
        background: #da2127;
        display: inline;
        color: #fff;
        font-size: 30px;
        font-weight: 300 !important;
        padding: 10px 25px;
        text-transform: uppercase;
    }

    #top-subtitle {
        text-align: center;
        /* border: 1rem solid blue; */
    }

    #maintenance {
        font-size: 0.85rem;
        /* Adjusts base font size for the entire form */
    }

    #top-subtitle,
    .form-check-label {
        font-size: 0.95em;
        /* Slightly larger than base font size, adjust as needed */
    }

    /* For placeholders specifically, if you need further adjustments */
    #left-request-form .form-control::placeholder {
        font-size: 0.75em;
        /* Adjusts placeholder text size, relative to the input font size */
    }


    /* RIGHT CHECKBOX BLOCK ENDS */

    #left-request-form .form-control {
        border: none;
        /* Removes input borders */
        background-color: #e3e3e3;
        /* Sets the input background color */
        color: #000;
        /* Ensures text is visible against the background */
    }

    #left-request-form .form-control::placeholder {
        color: gray;
        /* Styles placeholder text */
        font-size: .65rem;
    }

    /* Optional: adjust padding or height of inputs if needed */
    #left-request-form .form-control {
        padding: 0.135rem 0.75rem;
        /* Bootstrap default, adjust if necessary */
    }

    /* Custom Checkbox and Radio Buttons */
    .form-check-input {
        border-color: darkred !important;
        /* Sets the border color */
        /* Optional: Adjust the appearance further if needed */
        background-color: #fff;
        /* Background color */
        box-shadow: none !important;
        /* Removes any default or custom shadow to make the border more noticeable */
    }

    /* For better visibility, you might also consider changing the checkmark color when checked */
    .form-check-input:checked {
        background-color: #da2127;
        /* Example: using a darker color for checked state */
        border-color: #da2127;
        /* Keeps the border color consistent with the background on checked state */
    }
    </style>


    <!--   Start Popup  MAINTENANCE AgrREQUESTeement   -->

    <div class="popup" id="maintenance">
        <span class="popupheading">
            <h3>E-MAINTENANCE</h3>
        </span>
        <div class="pop-content">
            <form id="maintenanceForm" method="post" action="/processMaintenance.php">
                <input type="hidden" name="origin" value="desktop" />
                <p id="top-subtitle" class="mb-5">
                    Complete the E-maintenance form below. You’ll be contacted by the
                    appropriate maintenance service provider.
                </p>

                <div id="TWO-COL-BOX" class="container">
                    <div class="row">
                        <!-- LEFT FORM START -->
                        <div id="left-request-form" class="col-md-6">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="tenantsFirstName"
                                        placeholder="First Name">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="tenantsLastName"
                                        placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="streetAddressNumber"
                                        placeholder="Street Number">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="streetAddressName"
                                        placeholder="Street Name">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="q5_city5" placeholder="City">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="q6_zipCode" placeholder="Zip Code">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="apartmentNumber" placeholder="Apt #:">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input class="form-control" type="text" name="gateCode" placeholder="Gate Code">
                                </div>
                            </div>

                            <div class="mb-3">
                                <input class="form-control" type="text" name="q9_cellPhone" placeholder="Phone">
                            </div>

                            <div class="mb-3">
                                <input class="form-control" type="text" name="q13_email13" placeholder="E-mail">
                            </div>
                        </div>
                        <!-- LEFT FORM END -->


                        <!-- RIGHT CHECKBOX BLOCK START -->
                        <div id="right-checkbox-block" class="col-md-6">
                            <h5 class="">Please check whichever of the following apply:</h5>
                            <div class="my-checkbox-holder form-check">
                                <!-- RIGHT CHECKBOX BLOCK START -->
                                <div class="requestform requestform2" id="men_check">

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="input_11_0"
                                            name="q11_pleaseCheck_[]"
                                            value="A maintenance appointment is preferred (I understand that a vendor may complete the repair without an appointment).">
                                        <label class="form-check-label" for="input_11_0">
                                            A maintenance appointment is preferred (I understand that a vendor may
                                            complete the repair without an appointment).
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="input_11_1"
                                            name="q11_pleaseCheck_[]"
                                            value="Please proceed without further notice (I understand that a vendor may require an appointment).">
                                        <label class="form-check-label" for="input_11_1">
                                            Please proceed without further notice (I understand that a vendor may
                                            require an appointment).
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="input_11_2"
                                            name="q11_pleaseCheck_[]" value="There is a pet at the property">
                                        <label class="form-check-label" for="input_11_2">
                                            There is a pet at the property.
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="input_11_3"
                                            name="q11_pleaseCheck_[]" value="There is an alarm at the property">
                                        <label class="form-check-label" for="input_11_3">
                                            There is an alarm at the property.
                                        </label>
                                    </div>
                                </div>
                                <!-- RIGHT CHECKBOX BLOCK END -->

                            </div>
                            <!-- RIGHT CHECKBOX BLOCK END -->
                        </div>
                    </div>

                    <!-- RADIO BLOCK STARTS -->

                    <!-- CENTER RADIO BLOCK START -->
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col-12">
                                <p class="text-danger font-weight-bold">Please select the type of maintenance issue:</p>
                            </div>
                        </div>
                        <div class="row">
                            <!-- Column 1 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_0" name="q12_eMaintenance"
                                    value="a/c">
                                <label class="form-check-label" for="input_12_0">Air Conditioning and Heating</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_1" name="q12_eMaintenance"
                                    value="appliances">
                                <label class="form-check-label" for="input_12_1">Appliances</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_2" name="q12_eMaintenance"
                                    value="cabinets">
                                <label class="form-check-label" for="input_12_2">Cabinets</label>
                            </div>
                            <!-- Column 2 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_3" name="q12_eMaintenance"
                                    value="carpet">
                                <label class="form-check-label" for="input_12_3">Carpets and Tile Repairs</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_4" name="q12_eMaintenance"
                                    value="doors">
                                <label class="form-check-label" for="input_12_4">Doors and Windows</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_5" name="q12_eMaintenance"
                                    value="electrical">
                                <label class="form-check-label" for="input_12_5">Electrical</label>
                            </div>
                            <!-- Column 3 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_6" name="q12_eMaintenance"
                                    value="emergency">
                                <label class="form-check-label" for="input_12_6">Emergency Clean-up</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_7" name="q12_eMaintenance"
                                    value="fence">
                                <label class="form-check-label" for="input_12_7">Fence Repairs</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_8" name="q12_eMaintenance"
                                    value="garage">
                                <label class="form-check-label" for="input_12_8">Garage Doors</label>
                            </div>
                        </div>
                        <div class="row">
                            <!-- Continuation of Column 1 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_9" name="q12_eMaintenance"
                                    value="glass">
                                <label class="form-check-label" for="input_12_9">Glass</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_10" name="q12_eMaintenance"
                                    value="locksmith">
                                <label class="form-check-label" for="input_12_10">Locksmith</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_11" name="q12_eMaintenance"
                                    value="other">
                                <label class="form-check-label" for="input_12_11">Other</label>
                            </div>
                            <!-- Continuation of Column 2 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_12" name="q12_eMaintenance"
                                    value="pool">
                                <label class="form-check-label" for="input_12_12">Pool and Spa Service</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_13" name="q12_eMaintenance"
                                    value="plumbing">
                                <label class="form-check-label" for="input_12_13">Plumbing</label>
                            </div>
                            <!-- Continuation of Column 3 -->
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_14" name="q12_eMaintenance"
                                    value="roofing">
                                <label class="form-check-label" for="input_12_14">Roofing</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_15" name="q12_eMaintenance"
                                    value="sheetrock">
                                <label class="form-check-label" for="input_12_15">Sheetrock Repairs</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_16" name="q12_eMaintenance"
                                    value="siding">
                                <label class="form-check-label" for="input_12_16">Siding</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_20" name="q12_eMaintenance"
                                    value="windows">
                                <label class="form-check-label" for="input_12_20">Windows</label>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_17" name="q12_eMaintenance"
                                    value="termites">
                                <label class="form-check-label" for="input_12_17">Termites</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_18" name="q12_eMaintenance"
                                    value="tile">
                                <label class="form-check-label" for="input_12_18">Tile</label>
                            </div>
                            <div class="col-md-4 form-check">
                                <input class="form-check-input" type="radio" id="input_12_19" name="q12_eMaintenance"
                                    value="tree">
                                <label class="form-check-label" for="input_12_19">Tree Service</label>
                            </div>

                        </div>
                    </div>
                    <!-- CENTER RADIO BLOCK END -->
                    <!-- RADIO BLOCK ENDS -->

                    <!-- BOTTOM DESCRIPTION TEXTAREA START -->
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3 mt-5">
                                    <textarea class="form-control" id="input_15" name="q15_problemDescription"
                                        placeholder="Problem description:" rows="4"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="subbtn d-flex justify-content-end">
                            <!--NEW CAPTCHA BY MOOSE-->
                            <div class="g-recaptcha" data-sitekey="6LeWRD8nAAAAANqXnvNgDfeVdJ5LbMMDWbUKHXo8"></div>

                            <!--NEW SUBMIT BUTTON BY MOOSE-->
                            <input type="submit" value="Submit" name="submit_button"
                                class="btn btn-danger btn-lg px-5" />
                        </div>
                    </div>
                    <!-- BOTTOM DESCRIPTION TEXTAREA END -->

            </form>
        </div>
    </div>

</main><!-- #main -->


<?php
get_footer();