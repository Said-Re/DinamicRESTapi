var app = angular.module("myapp", []);
        app.controller("MyController", function($scope, $http, $compile) {
            $scope.myData = {};
            $scope.myData.doClick = function(item, event) {
                console.log($scope.route.name);
                var responsePromise = $http.post("http://localhost:3000/routes", {"routes" : [$scope.route.name] });
                responsePromise.success(function(data, status, headers, config) {
                    console.log(data);
                    var getBtnhtml = '<br /><button type="button" ng-click="getRequest('+ $scope.route.name +');">GET/' + $scope.route.name +'</button>';
                    var tempG = $compile(getBtnhtml)($scope);
                    angular.element(document.getElementById('foo')).append(tempG);

                    var optBtnhtml = '<button type="button" ng-click="optionsRequest('+ $scope.route.name +');">OPTIONS/' + $scope.route.name +'</button>';
                    var tempO = $compile(optBtnhtml)($scope);
                    angular.element(document.getElementById('foo')).append(tempO);
                });
                responsePromise.error(function(data, status, headers, config) {
                    console.log('error');
                });
            }
            $scope.getRequest = function (route) {
              var responsePromise = $http.get("http://localhost:3000/" + route);

              responsePromise.success(function(data, status, headers, config) {
                  console.log(data);
              });
              responsePromise.error(function(data, status, headers, config) {
                  console.log('error');
              });
            }

            $scope.optionsRequest = function (route) {
              var responsePromise = $http.options("http://localhost:3000/" + route);

              responsePromise.success(function(data, status, headers, config) {
                  console.log(data);
              });
              responsePromise.error(function(data, status, headers, config) {
                  console.log('error');
              });
            }
        });
