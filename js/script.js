var angCar = angular.module('angCar', ['ui.bootstrap'])
.controller('NavbarController', ['$scope', function($scope){
  $scope.isCollapsed = true;
}]);

$(function () {
$.ajax({
    url: "https://api.flickr.com/services/rest/",
    data: {
        method: "flickr.photos.search",
        api_key: "3bb2c0ff00002a50061d76bd2f0c9826",
        tags: "sandwich",
        format: "json",
        nojsoncallback: 1
    },
    success: function (response) {
        $.each(response.photos.photo, function (index, value) {
            console.log(value);
          var url = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '.jpg';
          var a = $('<a>').attr({href: url});
          var img = $('<img>').attr({src: url});
          a.append(img);
          $(".sandwichGallery").append(a);
        });
        $(".sandwichGallery").justifiedGallery(3);
    }
});
})