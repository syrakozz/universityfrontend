
import React from "react";
import {toast} from "react-toastify";
import {Memory} from "./Memory";
import Constants from "./Constants";

export class Utilites {


    static Search() {
        try {
            fbq('track', 'Search');
        }catch (e) {
            console.log(e)
        }

    }


    static getBaseLink(url) {
        if (url) {
            let parts = url.split('://');

            if (parts.length > 1) {
                return parts[0] + '://' + parts[1].split('/')[0] ;
            } else {
                return parts[0].split('/')[0] ;
            }
        }
        return "";
    }

    static isStrong(password) {
        if(password.length<6){
            return false;
        }
        var re = {
            'capital' : /[A-Z]/,
            'digit'   : /[0-9]/,
            //'except'  : /[aeiou]/,
            //'full'    : /^[@#][A-Za-z0-9]{7,13}$/
        };
        return re.capital .test(password) &&
            re.digit   .test(password);
        //!re.except  .test(password) &&
        //re.full    .test(password);
    }

    static getInnerLink(url) {
        let baselink= Utilites.getBaseLink(url);
        let res = url.replace(baselink, "");
        if(res.length===0){
            return "/"
        }
        return res;
    }
    static validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    static converttoint(value){
        return parseInt(value);
    }
    static complexpass(password) {
        let regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        return regExp.test(password);
    }
    static scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    static setTimeout(callMethod,seconds =400) {
        setTimeout(() => {
            callMethod();
        }, seconds);
    }
    static debounce(func, wait, immediate) {
        var timeout;

        return function executedFunction() {
          var context = this;
          var args = arguments;

          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };

          var callNow = immediate && !timeout;

          clearTimeout(timeout);

          timeout = setTimeout(later, wait);

          if (callNow) func.apply(context, args);
        };
    };


    static formatfulltext(str,maxword=0){
        if(str){
            str = str.replace(new RegExp('\r?\n','g'), '<br />');

            if(maxword>0 && str.length>maxword){
                str = str.substring(0, maxword).concat('...');
            }

        }





        return str;
    }
    static showErrorMessage(msg){
        toast(msg,{   className: 'alerterror'});
    }
    static showSucessMessage(msg){
        toast(msg,{className:"alertsuccess"});
    }

    static renderDescription(msg){
    try {
        msg= msg.replace(/(<([^>]+)>)/gi, "");
        return msg
    }catch (e) {
        return ""
    }
    }

    static getWords(str,limit  = 10) {
        return str.split(/\s+/).slice(0,limit).join(" ");
    }


    static  showRawPrice(price) { // price without tva
     var newprice = price;
       if(Constants.PRICE_WITH_TVA){
             newprice = (parseFloat(price)*0.85).toFixed(2);
        }
     return newprice;
    }

    static  showPrice( price) {
    var newprice = price;
        if(Constants.PRICE_WITH_TVA){
            newprice = (parseFloat(price)*1.15).toFixed(2);
        }
        return newprice;
}
    static renderDate(item) {
        if(!item){
            return "-"
        }
        let moment = require('moment');

        let obj = moment(item).utcOffset(item)

        // const newdate = obj.format('DD/MM/YYYY HH:mm')
        const newdate = obj.format('MMM DD YYYY ')
        return newdate
    }

    static nextDay() {

        let moment = require('moment');

        let obj = moment(Date()).add("1","day")

        // const newdate = obj.format('DD/MM/YYYY HH:mm') // 2022-03-15
        const newdate = obj.format('YYYY-MM-DD')
        return newdate
    }
    static generateRandomString(length = 8) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    static generateRandomNumber(length = 8) {
        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    static renderMiniProgress() {
        return (
            <section className="mt-50 mb-50" >
            <div className="content loadiingx">
                <div className=" ml-auto mr-auto">
                    <div className="col-md-12 col-sm-12 col-xs-12 pt-100 pb-100" style={{textAlign: "center"}}>
                        <img
                            src="/assets/imgs/theme/loading.gif"
                            alt="loading..."
                            width="100"
                        />
                    </div>
                </div>
            </div>
            </section>
        )
    }

    static renderProgress() {
        return (
                <Layout noBreadcrumb="d-none" shownewsletter={false}>
                    <section className="mt-50 mb-50">
                        <div className="container mb-30">
                            <div className="row ">
                                <div className="col-md-12 col-sm-12 col-xs-12 pt-100 pb-100" style={{textAlign: "center"}}>
                                    <img
                                        src="/assets/imgs/theme/loading.gif"
                                        alt="loading..."
                                        width="100"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>

                </Layout>
        )
    }

}
