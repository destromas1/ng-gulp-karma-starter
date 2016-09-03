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
    {id: 2, name: "Prod2" }
  ];
  
  it('should fetch product', function () {
     httpBackend.expectGET('http://localhost:9001/api/product/')
      .respond(products);
    
     factory.get().then(function (data) {
         expect(data.data).toEqual(products);
     });

     httpBackend.flush();
  });

  it('should post product', function () {

    httpBackend.expectPOST('http://localhost:9001/api/product/')
      .respond(200, { success: true });

    factory.save({id: 3, name: "Prod3" })
      .then(function (resp) {
        expect(resp.data.success).toEqual(true);
      });

    httpBackend.flush();
  });

});
