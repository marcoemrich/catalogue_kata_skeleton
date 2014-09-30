describe('catalog_selector', function() {

    beforeEach(function() {
        var catalogFixture = affix('#products_catalogue');
        catalogFixture.affix('ul.available>li[data-item_id="1"]+li[data-item_id="2"]');
        catalogFixture.affix('ul.selected');
    });

    it('should have a products_catalogue', function() {
        expect($('#products_catalogue').length).toEqual(1);
    });

});
