'use strict';

angular.module('playerApp')
    .controller('LearnCtrl', function(learnService, $log, $scope, $sessionStorage, $timeout) {
        var learn = this;
        var uid = $sessionStorage.userId;

        $scope.$on('ngRepeatFinished', function() {
            $('.regular').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4
            });
        });

        function handleFailedResponse(errorResponse) {
            var error = {};
            error.isError = true;
            error.message = '';
            error.responseCode = errorResponse.responseCode;
            learn.error = error;

            $timeout(function() {
                $scope.error = {};
            }, 2000);
        }

        learn.courses = function() {
            learnService.enrolledCourses(uid).then(function(successResponse) {
                    if (successResponse && successResponse.responseCode === 'OK') {
                        learn.enrolledCourses = successResponse.result.courses;
                    } else {
                        $log.warn('enrolledCourses', successResponse);
                        handleFailedResponse(successResponse);
                    }
                })
                .catch(function(error) {
                    $log.warn(error);
                    handleFailedResponse('enrolledCourses', error);
                });
        };
        learn.courses();
    });