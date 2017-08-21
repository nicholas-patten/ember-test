import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('builders');
  this.route('manks');
  this.route('jammers');
  this.route('yaddayadda');
});

export default Router;
