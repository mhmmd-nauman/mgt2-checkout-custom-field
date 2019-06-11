define([
    'uiElement',
    'ko',
], function (Component,ko) {
    'use strict';

    var checkoutConfig = window.checkoutConfig;
    
    return Component.extend({
        dob_month: ko.observable("MM"),
        dob_day: ko.observable("DD"),
        dob_year: ko.observable("YYYY"),
        defaults: {
            template: 'Nauman1_CheckoutCustomField/testcomponent',
            totala:12,
            tracks:{totala:true}
        },

        initialize: function () {
            this._super();
        },

        isActive:function(){
            return true;
        },
        onSubmit1: function() {
           // alert(this.dob_month());
           
           
           
        }



    });
});