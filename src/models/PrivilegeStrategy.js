/**
 * Created by zhouyong on 15-1-8.
 */
var privilegeRuleFactory = new PrivilegeRuleFactory();

function strategy_one(){
    var itemOnSale = privilegeRuleFactory.item_on_sale(9.5);
    var brandOnSale = privilegeRuleFactory.brand_on_sale(9.0);
    itemOnSale.conflicts.push('brandOnSale-self');
    brandOnSale.conflicts.push('itemOnSale-other');
    itemOnSale.relevance('可口可乐350Ml');
    brandOnSale.relevance('可口可乐');
}

function strategy_two(){
    var itemOnSale = privilegeRuleFactory.item_on_sale(9.5);
    var brandOnSale = privilegeRuleFactory.brand_on_sale(9.0);
    itemOnSale.conflicts.push('brandOnSale-other');
    brandOnSale.conflicts.push('itemOnSale-self');
    itemOnSale.relevance('可口可乐350Ml');
    brandOnSale.relevance('可口可乐');
    var itemOnReduce = privilegeRuleFactory.item_on_reduce('100-2');
    itemOnReduce.relevance('康师傅');
    itemOnReduce.rule = '100-5';
    itemOnReduce.relevance('云山荔枝');
}

function strategy_three(){

}

function strategy_four(){

}

function printInventory(input_barCodes){

}
