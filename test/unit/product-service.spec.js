"use strict";

describe("productService", function () {

  beforeEach(module('app'));

  var factory, httpBackend;

  beforeEach(inject(function ($httpBackend, productService) {
    httpBackend = $httpBackend;
    factory = productService;
  }));

  var products = [
    {id: 1, name: "Prod1" },
    { id: 2, name: "Prod2" }
  ];
  
  it('should fetch product', function () {
     httpBackend.expectGET('http://localhost:9001/api/product/')
      .respond(products);
    
     factory.get().then(function (data) {
         console.log("----------------------------------------------");
         console.log(data);
         console.log("----------------------------------------------");
         expect(data.data).toEqual(products);
     });

     httpBackend.flush();
  });
    

});



