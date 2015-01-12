/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRule(ruleName,type,category,rule,conflicts,baseOn,baseOriginalPrice,privilegedPrice,privilegePrice){
    this.ruleName = ruleName;
    this.type = type;
    this.category = category;
    this.rule = rule;
    this.conflicts = conflicts?conflicts:[];
    this.baseOn = baseOn;
    this.baseOriginalPrice = baseOriginalPrice;
    this.privilegedPrice = privilegedPrice;
    this.privilegePrice = privilegePrice;
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
                self._solve_conflict(commodity.privilegeRules);
            }
            if(commodityInfo && commodity[key] == commodityInfo){
                self._solve_conflict(commodity.privilegeRules);
            }
            return commodity
        });
        set_commodities(commodities);
    },
    _solve_conflict:function(privilegeRules){
        var self = this;
        if(self.conflicts.length > 0){
            _.each(self.conflicts,function(conflict){
                var conflictObj = conflict.split('-');
                var conflictRule = _.where(privilegeRules,{ruleName:conflictObj[0]});
                if(conflictRule && conflictObj[1] == 'other'){
                    privilegeRules.splice(_.indexOf(privilegeRules,conflictRule),1);
                    self._insert_by_baseOn(privilegeRules);
                }
                if(!conflictRule){
                    self._insert_by_baseOn(privilegeRules);
                }
            });
        }else{
            self._insert_by_baseOn(privilegeRules);
        }
    },
    _insert_by_baseOn:function(privilegeRules){
        var self = this;
        if(self.baseOn){
            var baseOnRule = _.where(privilegeRules,{ruleName:self.baseOn});
            var baseByRule = _.where(privilegeRules,{baseOn:self.ruleName});
            if(baseOnRule){
                var baseOnRuleIndex = _.indexOf(privilegeRules,baseOnRule);
                _insert_by_index(privilegeRules,baseOnRuleIndex+1,self);
            }
            if(!baseOnRule && baseByRule){
                var baseByRuleIndex = _.indexOf(privilegeRules,baseByRule);
                _insert_by_index(privilegeRules,baseByRuleIndex,self);
            }
            if(!baseOnRule && !baseByRule){
                privilegeRules.push(self);
            }
        }else{
            privilegeRules.unshift(self);
        }
    },
    settle_accounts: function(subtotal){
        var self = this;
        switch(self.category){
            case 'discount':
                self.privilegedPrice = subtotal*(self.rule/10);
                self.privilegePrice = subtotal * (1-self.rule/10);
                break;
            case 'reduce':
                var rule = self.rule.split('-');
                self.privilegedPrice = subtotal-(Math.floor(subtotal/rule[0]))*rule[1];
                self.privilegePrice = (Math.floor(subtotal/rule[0]))*rule[1];
                break;
        }
    }
};

function _insert_by_index(array,index,obj){
    var length = array.length;
    var temp,temp1;
    for(var x = 0; x < length; x++){
        if(x == index){
            temp = array[x];
            array[x] = obj;
        }
        if(x > index){
            temp1 = array[x];
            array[x] = temp;
            temp = temp1;
        }
    }
    array[length] = temp;
}