define([
    'uiElement'
], function (Component) {
    'use strict';

    var checkoutConfig = window.checkoutConfig;

    return Component.extend({

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
        }



    });
});