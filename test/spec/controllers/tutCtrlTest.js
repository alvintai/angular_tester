describe ('PhoneCat controllers', function() {
  describe('tutCtrl', function() {
    it('should create "phones" model with 4 phones', function(){
      var scope = {},
        ctrl = new tutCtrl(scope);

        expect (scope.phones.length).toBe(4);
    });
  });
});