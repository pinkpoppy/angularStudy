/**
 * Created by sszhu on 15/10/29.
 */
angular.module("MyModule",[])
    .directive("hello", function () {
    return {
       restrict:'E',
       template:'<div>Hi everyone!</div>',
       replace:true
    })
    .controller("HelloCtrl",function($scope) {
    })
