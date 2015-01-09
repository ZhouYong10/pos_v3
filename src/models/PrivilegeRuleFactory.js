/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRuleFactory(){

}

PrivilegeRuleFactory.prototype = {
    item_on_sale: function(discountRate){
        return  new PrivilegeRule('itemOnSale','item','discount',discountRate);
    },
    brand_on_sale: function(discountRate){
        return PrivilegeRule('brandOnSale','brand','discount',discountRate);
    },
    all_on_sale: function(discountRate){
        return PrivilegeRule('allOnSale','all','discount',discountRate);
    },
    item_on_reduce: function(reduceRule){
        return new PrivilegeRule('itemOnReduce','item','reduce',reduceRule);
    },
    brand_on_reduce: function(reduceRule){
        return new PrivilegeRule('brandOnReduce','brand','reduce',reduceRule);
    },
    all_on_reduce: function(reduceRule){
        return new PrivilegeRule('allOnReduce','all','reduce',reduceRule);
    }
};