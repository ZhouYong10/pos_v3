/**
 * Created by zhouyong on 15-1-8.
 */
describe('Cart',function(){
    it('parse_bar_codes_to_commodities',function(){
        var cart = new Cart(cart_datum());
        var commodities = cart.parse_bar_codes_to_commodities();
        var results = parse_bar_codes_to_commodities_result();
        expect(commodities.length).toBe(4);
        for(var x = 0; x < commodities.length; x++){
            var commodity = commodities[x][0];
            var result = results[x];
            expect(commodity.barCode).toBe(result.barCode);
            expect(commodity.category).toBe(result.category);
            expect(commodity.brand).toBe(result.brand);
            expect(commodity.commodityName).toBe(result.commodityName);
            expect(commodity.unit).toBe(result.unit);
            expect(commodity.price).toBe(result.price);
            expect(commodities[x]["num"]).toBe(result.num);
        }
    });
});