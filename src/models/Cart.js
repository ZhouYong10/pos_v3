/**
 * Created by zhouyong on 15-1-8.
 */
function Cart(barCodes){
    this.barCodes = barCodes;
}

Cart.prototype = {
    parse_bar_codes_to_commodities : function(){
        var barCodes = this.barCodes;
        return _.map(barCodes,function(barCode){
            for(var i in barCode){
                var commodity = _.where(get_commodities(),{barCode:i});
                commodity.num = barCode[i];
                console.log(commodity);
                return commodity;
            }
        });
    }
};
