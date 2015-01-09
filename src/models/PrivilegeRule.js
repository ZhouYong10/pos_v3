/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRule(ruleName,type,category,rule,effective){
    this.ruleName = ruleName;
    this.type = type;
    this.category = category;
    this.rule = rule;
    this.effective = effective?effective:'no';
}

PrivilegeRule.prototype = {
    relevance: function(commodityInfo){
        var self = this;
        switch(self.type){
            case 'item':
                self._relevance(commodityInfo,"commodityName");
                break;
            case 'brand':
                self._relevance(commodityInfo,"brand");
                break;
            case 'all':
                self._relevance();
                break;
        }
    },
    _relevance: function(commodityInfo,key){
        var self = this;
        var commodities = _.map(get_commodities(),function(commodity){
            if(!commodityInfo){
                commodity.privilegeRules.push(self);
            }
            if(commodityInfo && commodity[key] == commodityInfo){
                commodity.privilegeRules.push(self);
            }
            return commodity
        });
        set_commodities(commodities);
    },
    settle_accounts: function(subtotal){
        var self = this;
        switch(self.category){
            case 'discount':
                return subtotal * self.rule;
                break;
            case 'reduce':
                var rule = self.rule.split('-');
                return (subtotal/rule[0])*rule[1];
                break;
        }
    }
};