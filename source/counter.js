"use strict";

var counter = (function () {

    var add = function(num1,num2){
        return num1+num2
    };
    var subtract = function(num1,num2){
        return num1 - num2;
    }
    var difference = function(num1,num2){
        return num1 - num2;
    }

    var summary = function(num1,num2){
        var a1 = {}
        a1.num1 = num1;
        a1.num2 = num2;
        a1.add = num1+num2
        a1.difference = num1 - num2;
        return JSON.stringify(a1)
    }

    return{
        add :add,
        subtract:subtract,
        difference:difference,
        summary:summary
    };

}());