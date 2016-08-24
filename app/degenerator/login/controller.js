import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

 actions: {
   loginUser(formValues) {
     const authenticator = 'authenticator:application';

     this.get('session').authenticate(authenticator,
       { identification: formValues.email, password: formValues.password })
       .then(() => {
         this.toggleProperty('.hidden-alert', '.alert-overlay');
         this.transitionToRoute('degenerator.upload');
         console.log('working');
       });
   },

    },

});
