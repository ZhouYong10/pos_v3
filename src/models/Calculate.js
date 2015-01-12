/**
 * Created by zhouyong on 15-1-12.
 */
function Calculate(allOnPrivilege){
    this.allOnPrivilege = allOnPrivilege;
}

Calculate.prototype = {
    settle_accounts: function(commodities){
        return _.map(commodities,function(commodity){
            commodity.subtotal = commodity.price*commodity.num;
            commodity.privilegePrice = 0;
            var rules = commodity.privilegeRules;
            if(rules.length>0){
                for(var x = 0; x < rules.length; x++){
                    var rule = rules[x];
                    if(rule.baseOriginalPrice){
                        rule.settle_accounts(commodity.subtotal);
                    }else{
                        rule.settle_accounts(rules[x-1].privilegedPrice);
                    }
                    commodity.privilegePrice += rule.privilegePrice;
                }
            }
            return commodity;
        });
    },
    print_order: function(commodities){

    }
};