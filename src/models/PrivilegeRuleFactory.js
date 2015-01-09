/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRuleFactory(){

}

PrivilegeRuleFactory.prototype = {
    item_on_sale:function(rule){
        privilegeRule =  new PrivilegeRule('itemOnSale','discount',rule);
        privilegeRule.settle_accounts = function(price){
            return price * this.rule;
        }
    }
};