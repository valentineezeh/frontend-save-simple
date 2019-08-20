/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import $ from 'jquery';
import '../css/main.css';

const container_width = 260 * $('.each_type_of_goals').length;
$('.type_of_goals').css('width', `${container_width}px`);

$(document).ready(() => {
  $('#basic_input').click(() => {
    $('#verify_inputs_container').fadeOut(300);
    $('#basic_inputs_container').delay(300).fadeIn();
  });

  $('#verify_inut').click(() => {
    $('');

    $('#basic_inputs_container').fadeOut(300);
    $('#verify_inputs_container').delay(300).fadeIn();
  });

  $('#btn_verify_next').click(() => {
    $('#basic_inputs_container').fadeOut(300);
    $('#verify_inputs_container').delay(300).fadeIn();
  });

  $('#create_form_options li').click(() => {
    $('#create_form_options li.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#btn_verify_next').click((e) => {
    e.preventDefault();

    $('#create_form_options li:nth-child(1)').removeClass('active');
    $('#create_form_options li:nth-child(2)').addClass('active');
  });

  $('#verify_data').click(() => {
    $('#page_content_wrapper').fadeOut(200);
    $('.success_msg_main_container').delay(200).fadeIn();
  });

  $('.sideNavBtnOpen').click(() => {
    $('.mobile_nav_div_container').css('width', '100%');
  });

  $('.close_nav_btn').click(() => {
    $('.mobile_nav_div_container').css('width', '0');
  });

  $('.dashboard_sideNav_open button').click(() => {
    $('.dashboard_mobile_sideNav').css('width', '100%');
  });

  $('.dash_close_nav_btn').click(() => {
    $('.dashboard_mobile_sideNav').css('width', '0');
  });

  $('.step_number div').click(() => {
    $('.step_number div.active').removeClass('active');
    $(this).addClass('active');
  });


  $('#target_save_next_one').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_one').removeClass('active');
    $('.step_number .step_number_two').addClass('active');

    $('.savings_details').fadeOut(300);
    $('.funding_source').delay(300).fadeIn();
  });

  $('#target_save_next_two').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_two').removeClass('active');
    $('.step_number .step_number_three').addClass('active');

    $('.funding_source').fadeOut(300);
    $('.destination_account').delay(300).fadeIn();
  });

  $('#target_save_next_two_group').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_two').removeClass('active');
    $('.step_number .step_number_four_group').addClass('active');

    $('.funding_source').fadeOut(300);
    $('.destination_account_three').delay(300).fadeIn();
  });


  $('#target_save_next_three').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_three').removeClass('active');
    $('.step_number .step_number_four').addClass('active');

    $('.destination_account').fadeOut(300);
    $('.destination_account_twoo').delay(300).fadeIn();
  });

  // My own settings
  $('#target_save_next_four').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_three').removeClass('active');
    $('.step_number .step_number_four').addClass('active');

    $('.destination_account').fadeOut(300);
    $('.destination_account_twoo').delay(300).fadeIn();
  });

  $('#target_save_next_five').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_four').removeClass('active');
    $('.step_number .step_number_five').addClass('active');

    $('.destination_account_twoo').fadeOut(300);
    $('.destination_account_three').delay(300).fadeIn();
  });

  // for group savings
  $('#target_save_next_five_group').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_three_group').removeClass('active');
    $('.step_number .step_number_four_group').addClass('active');

    $('.destination_account_twoo').fadeOut(300);
    $('.destination_account_three').delay(300).fadeIn();
  });

  $('#target_save_next_six_group').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_four_group').removeClass('active');
    $('.step_number .step_number_five_group').addClass('active');

    $('.destination_account_three').fadeOut(300);
    $('.almost_done').delay(300).fadeIn();
  });

  $('#target_save_next_six').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_five').removeClass('active');
    $('.step_number .step_number_six').addClass('active');

    $('.destination_account_three').fadeOut(300);
    $('.almost_done').delay(300).fadeIn();
  });

  $('#target_save_next_seven').click((e) => {
    e.preventDefault();

    $('.step_number .step_number_three').removeClass('active');
    $('.step_number .step_number_four').addClass('active');

    $('.destination_account').fadeOut(300);
    $('.almost_done').delay(300).fadeIn();
  });


  $('.step_number_one').click(() => {
    $('.step_number .step_number_one').addClass('active');
    $("[id*='psavings_']").not('#psavings_savings_details').fadeOut(300);

    $('#psavings_savings_details').delay(300).fadeIn();
  });

  $('.step_number_two').click(() => {
    $('.step_number .step_number_two').addClass('active');
    $("[id*='psavings_']").not('#psavings_funding_source').fadeOut(300);

    $('#psavings_funding_source').delay(300).fadeIn();
  });

  $('.step_number_three').click(() => {
    $('.step_number .step_number_three').addClass('active');
    $("[id*='psavings_']").not('#psavings_destination_account').fadeOut(300);

    $('#psavings_destination_account').delay(300).fadeIn();
  });

  // group savings
  $('.step_number_three_group').click(() => {
    $('.step_number .step_number_three_group').addClass('active');
    $("[id*='psavings_']").not('#psavings_destination_account_twoo').fadeOut(300);

    $('#psavings_destination_account_twoo').delay(300).fadeIn();
  });

  $('.step_number_four_group').click(() => {
    $('.step_number .step_number_four_group').addClass('active');
    $("[id*='psavings_']").not('#psavings_destination_account_three').fadeOut(300);

    $('#psavings_destination_account_three').delay(300).fadeIn();
  });

  $('.step_number_five_group').click(() => {
    $('.step_number .step_number_five_group').addClass('active');
    $("[id*='psavings_']").not('#psavings_almost_done').fadeOut(300);

    $('#psavings_almost_done').delay(300).fadeIn();
  });

  // ============================================

  $('.step_number_four').click(() => {
    $('.step_number .step_number_four').addClass('active');
    $("[id*='psavings_']").not('#psavings_destination_account_twoo').fadeOut(300);

    $('#psavings_destination_account_twoo').delay(300).fadeIn();
  });

  // my own
  $('.step_number_five').click(() => {
    $('.step_number .step_number_five').addClass('active');
    $("[id*='psavings_']").not('#psavings_destination_account_three').fadeOut(300);

    $('#psavings_destination_account_three').delay(300).fadeIn();
  });

  $('.step_number_six').click(() => {
    $('.step_number .step_number_six').addClass('active');
    $("[id*='psavings_']").not('#psavings_almost_done').fadeOut(300);

    $('#psavings_almost_done').delay(300).fadeIn();
  });

  $('.step_number_seven').click(() => {
    $('.step_number .step_number_seven').addClass('active');
    $("[id*='psavings_']").not('#psavings_almost_done').fadeOut(300);

    $('#psavings_almost_done').delay(300).fadeIn();
  });
  // end of my own


  $('#review_btn').click(() => {
    $('.gp_sav').fadeOut(300);
    $('.gp_sav_review').delay(300).fadeIn();
  });

  $('.filter_dropdown').click(() => {
    $('.second_child_filter_dropdown').fadeToggle();
  });

  // Notification
  $('.notification_div').click((e) => {
    e.preventDefault();

    $('.notification_div').removeClass('active_notification');
    $(this).addClass('active_notification');
  });


  // Questionnaire

  $('#to_question_two').click((e) => {
    e.preventDefault();

    $('.question_1').fadeOut(300);
    $('.question_2').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 50% !important;}</style>');
  });

  $('#back_to_question_one').click((e) => {
    e.preventDefault();

    $('.question_2').fadeOut(300);
    $('.question_1').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 25% !important;}</style>');
  });

  $('#to_question_three').click((e) => {
    e.preventDefault();

    $('.question_2').fadeOut(300);
    $('.question_3').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 75% !important;}</style>');
  });

  $('#back_to_question_two').click((e) => {
    e.preventDefault();

    $('.question_3').fadeOut(300);
    $('.question_2').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 50% !important;}</style>');
  });

  $('#last_phase').click((e) => {
    e.preventDefault();

    $('.question_3').fadeOut(300);
    $('.last_phase').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 100% !important;}</style>');
  });

  $('#back_to_question_three').click((e) => {
    e.preventDefault();

    $('.last_phase').fadeOut(300);
    $('.question_1').delay(300).fadeIn();

    $('head').append('<style>.question_main_wrapper:after{width: 25% !important;}</style>');
  });
});
