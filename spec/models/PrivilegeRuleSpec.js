/**
 * Created by zhouyong on 15-1-9.
 */
describe('PrivilegeRule',function(){

    describe('method relevance should be relevance commodity correct.',function(){
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

    describe('method settle_accounts',function(){

        var privilegeRuleFactory;
        beforeEach(function(){
            privilegeRuleFactory = new PrivilegeRuleFactory();
        });

        it('Calculate the price based on discount rules',function(){
            var discount = privilegeRuleFactory.item_on_sale(9.5);
            expect(discount.settle_accounts(120)).toEqual(120*(1-0.95));
        });

        it('Calculate the price based on the full reduce rule',function(){
            var reduce = privilegeRuleFactory.item_on_reduce('100-5');
            expect(reduce.settle_accounts(450)).toEqual(20);
        });
    });

    describe('method except',function(){

        var privilegeRuleFactory;
        beforeEach(function(){
            privilegeRuleFactory = new PrivilegeRuleFactory();
        });

        it('discount except',function(){
            var allOnSale = privilegeRuleFactory.all_on_sale(9.5);
            allOnSale.except(['可口可乐350ml','雪碧'],['可口可乐','云山']);
            expect(allOnSale.exceptCommodities).toEqual(['可口可乐350ml','雪碧']);
            expect(allOnSale.exceptBrands).toEqual(['可口可乐','云山']);
        });

        it('reduce except',function(){
            var allOnReduce = privilegeRuleFactory.all_on_reduce('100-5');
            allOnReduce.except(['可口可乐350ml','雪碧'],['可口可乐','云山']);
            expect(allOnReduce.exceptCommodities).toEqual(['可口可乐350ml','雪碧']);
            expect(allOnReduce.exceptBrands).toEqual(['可口可乐','云山']);
        });
    });

});