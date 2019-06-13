define([
    'uiElement',
    'ko',
    'jquery',
], function (Component,ko,$) {
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
           alert($("#dob_month").val());
           var zipcode= encodeURIComponent("93306");
           var firstname= encodeURIComponent("Lucy");
           var lastname = encodeURIComponent("Jones");
           var address = encodeURIComponent("1012 Main St");
           var dob = encodeURIComponent("8/2/1969");
           var country = encodeURIComponent("");
           var gender = encodeURIComponent("F");
           var phone = encodeURIComponent("2082243569");
           var param = "sid=SIDE18IH56181033201564336442857001616154"+
                   "&zip="+zipcode+"&first="+firstname+"&last="+lastname+
                   "&address="+address+"&dob="+dob+"&country="+country+
                   "&gender="+gender+"&phone="+phone;
            var url = "https://www.INTEGRITY-DIRECT.com/online/authentication_url.asp";
            var count = param.length;
           $.ajax({
                    showLoader: true,
                    url: url,
                    data: param,
                    type: "POST",
                    headers: {  'Content-type': 'application/x-www-form-urlencoded',
                                'Content-Length': count,
                                'Access-Control-Allow-Origin':'*'
                             }
                }).done(function (data) {
                    console.log(data);
            });
           
           
        }



    });
});