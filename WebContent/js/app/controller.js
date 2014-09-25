var mcsApp = angular.module('mcsApp', []);

mcsApp.controller('ServicesCtrl', function ($scope) {
  $scope.services = ["Requirements Analysis",
                     "Application Design",
                     "Database Design",
                     "Functional Specifications",
                     "Technical Specifications",
                     "Software Development",
                     "Architecture Design",
                     "Application Enhancement and Maintenance",
                     "Testing",
                     "Implementation",
                     "Support"];
});

mcsApp.controller('SkillsCtrl', function($scope) {
	$scope.skills = [{"area":"Programming Languages","names":["Java and related frameworks","Java EE","Groovy","Web (HTML, CSS, JavaScript, JQuery)","SQL","PL-SQL"]},
	                 {"area":"Databases"            ,"names":["Oracle", "DB2", "My-SQL"]},
	                 {"area":"Server/Platforms"     ,"names":["OracleApplication servers including Tomcat, JBoss and Web logic","Operating Systems including UNIX, LINUX and Windows"]}];
});
