<?php

function form_embed_login_settings($form, &$form_state) {
  $form['form_embed_login_display'] = array(
    '#title' => t('form embed login display'),
    '#type' => 'select',
    '#options' => array(
      FORM_EMBED_LOGIN_DISPLAY_ALWAYS => t('display always'),
      FORM_EMBED_LOGIN_DISPLAY_CLICK => t('display click')
    ),
    '#default_value' => variable_get('form_embed_login_display', FORM_EMBED_LOGIN_DISPLAY_ALWAYS),
  );
  return system_settings_form($form);
}
