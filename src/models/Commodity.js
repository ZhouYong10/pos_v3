/**
 * Created by zhouyong on 15-1-8.
 */
function Commodity(barCode,category,brand,commodityName,unit,price,privilegeRules){
    this.barCode = barCode;
    this.category = category;
    this.brand = brand;
    this.commodityName = commodityName;
    this.unit = unit;
    this.price = price;
    this.privilegeRules = privilegeRules?privilegeRules:[];
}