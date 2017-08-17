const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    // function to get beer data
    this.getBeer = function(){
      // ajax call to url to get beer data
      $http({
          method: 'GET',
          url: '/beer',
      }).then(
          function(response){
              controller.beers = response.data;
          },
          function(error){

          }
      )
    }
    // function to create new beer
    this.createBeer = function(){
      $http({
          method: 'POST',
          url: '/beer',
          data: {
              varietal: this.varietal,
              brand: this.brand,
              name: this.name,
              abv: this.abv,
          }
      }).then(
          function(response){
              controller.getBeer();
          },
          function(err){

          }
      );
    }
    // function to edit beer
    this.editBeer = function(beer){
      $http({
          method: 'PUT',
          url: '/beer/' + beer._id,
          data: {
              varietal: this.updatedVarietal,
              brand: this.updatedBrand,
              name: this.updatedName,
              abv: this.updatedAbv,
          }
      }).then(
          function(response){
            controller.getBeer();
        },
          function(err){

        }
      )
    }
    // function to delete beer
    this.deleteBeer = function(beer){
        $http({
            method: 'DELETE',
            url: '/beer/' + beer._id,
        }).then(
            function(response){
                controller.getBeer();
            },
            function(err){

            }
        )
    }
    this.getBeer();
}])
