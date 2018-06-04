import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Firebase from 'emberfire';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

App.ApplicaitonAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://emberfire-project.firebaseio.com")
});

loadInitializers(App, config.modulePrefix);

export default App;
