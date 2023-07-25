var myApp = angular
  .module('myApp',[])
  .controller('myController', function($scope){

      var languages = [

        {android: "Android Tutorials"},
        {angularjs: "Angularjs Tutorials"},
        {csharp: "C# Tutorials"},
        {css: "CSS Tutorials"},
        {html: "HTML5 Tutorials"},
        {jquery: "jQuery Tutorials"},
        {javascript: "JavaScript Tutorials"}
      ];

        $scope.languages = languages;

  });
