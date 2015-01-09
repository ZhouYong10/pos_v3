/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRuleFactory(){

}

PrivilegeRuleFactory.prototype = {
    item_on_sale: function(discountRate){
        return  new PrivilegeRule('itemOnSale','discount',discountRate);
    },
    brand_on_sale: function(discountRate){
        return PrivilegeRule('brandOnSale','discount',discountRate);
    },
    all_on_sale: function(discountRate){
        return PrivilegeRule('allOnSale','discount',discountRate);
    },
    item_on_reduce: function(reduceRule){
        return new PrivilegeRule('itemOnReduce','reduce',reduceRule);
    },
    brand_on_reduce: function(reduceRule){
        return new PrivilegeRule('brandOnReduce','reduce',reduceRule);
    },
    all_on_reduce: function(reduceRule){
        return new PrivilegeRule('allOnReduce','reduce',reduceRule);
    }
};