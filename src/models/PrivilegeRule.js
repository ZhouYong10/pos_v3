/**
 * Created by zhouyong on 15-1-8.
 */
function PrivilegeRule(ruleName,category,rule,effective){
    this.ruleName = ruleName;
    this.category = category;
    this.rule = rule;
    this.effective = effective?effective:'no';
}