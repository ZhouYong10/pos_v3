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
    item_reduce: function(reduceRule){
        return new PrivilegeRule('item_reduce','reduce',reduceRule);
    }
};