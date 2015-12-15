import Ember from 'ember';
import layout from '../templates/components/submit-button';

import { invokeAction } from 'ember-invoke-action';

export default Ember.Component.extend({
  layout,

  tagName: 'input',
  type:    'submit',
  value:   'Submit',

  attributeBindings: ['type', 'value'],

  click(e) {
    invokeAction(this, 'submit', e);
    e.preventDefault();
  }
});