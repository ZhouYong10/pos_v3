/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRuleFactory(){

}

var _except = function(obj){
    obj.except = function(commodities,brands){
        this.exceptCommodities = commodities;
        this.exceptBrands = brands;
    };
};

PrivilegeRuleFactory.prototype = {
    item_on_sale: function(discountRate){
        return  new PrivilegeRule('itemOnSale','item','discount',discountRate);
    },
    brand_on_sale: function(discountRate){
        return new PrivilegeRule('brandOnSale','brand','discount',discountRate);
    },
    all_on_sale: function(discountRate){
        var allOnSale = new PrivilegeRule('allOnSale','all','discount',discountRate);
        _except(allOnSale);
        return allOnSale;
    },
    item_on_reduce: function(reduceRule){
        return new PrivilegeRule('itemOnReduce','item','reduce',reduceRule);
    },
    brand_on_reduce: function(reduceRule){
        return new PrivilegeRule('brandOnReduce','brand','reduce',reduceRule);
    },
    all_on_reduce: function(reduceRule){
        var allOnReduce = new PrivilegeRule('allOnReduce','all','reduce',reduceRule);
        _except(allOnReduce);
        return allOnReduce;
    }
};