/**
 * Created by zhouyong on 15-1-9.
 */
describe('PrivilegeRule',function(){

    describe('should be relevance commodity correct.',function(){
        var privilegeRuleFactory;
        beforeEach(function(){
            set_commodities();
            privilegeRuleFactory = new PrivilegeRuleFactory();
        });

        describe('relevance item',function(){
            it('item_on_sale',function(){
                var itemOnSale = privilegeRuleFactory.item_on_sale(9.5);
                itemOnSale.relevance('可口可乐350ml');
                expect(get_commodities()[0]['privilegeRules'][0]).toEqual(itemOnSale);
            });

            it('item_on_reduce',function(){
                var itemOnReduce = privilegeRuleFactory.item_on_reduce('100-5');
                itemOnReduce.relevance('可口可乐350ml');
                expect(get_commodities()[0]['privilegeRules'][0]).toEqual(itemOnReduce);
            });
        });

        describe('relevance brand',function(){
            it('brand_on_sale',function(){
                var brandOnSale = privilegeRuleFactory.brand_on_sale(9.5);
                brandOnSale.relevance('可口可乐');
                _.each(_.where(get_commodities(),{brand:'可口可乐'}),function(item){
                    expect(item['privilegeRules'][0]).toEqual(brandOnSale);
                });
            });

            it('brand_on_reduce',function(){
                var brandOnReduce = privilegeRuleFactory.brand_on_reduce('100-5');
                brandOnReduce.relevance('可口可乐');
                _.each(_.where(get_commodities(),{brand:'可口可乐'}),function(item){
                    expect(item['privilegeRules'][0]).toEqual(brandOnReduce);
                });
            });
        });

        describe('relevance all',function(){
            it('all_on_sale',function(){
                var brandOnSale = privilegeRuleFactory.all_on_sale(9.5);
                brandOnSale.relevance();
                _.each(get_commodities(),function(item){
                    expect(item['privilegeRules'][0]).toEqual(brandOnSale);
                });
            });

            it('all_on_reduce',function(){
                var brandOnReduce = privilegeRuleFactory.all_on_reduce('100-5');
                brandOnReduce.relevance();
                _.each(get_commodities(),function(item){
                    expect(item['privilegeRules'][0]).toEqual(brandOnReduce);
                });
            });
        });
    });

});