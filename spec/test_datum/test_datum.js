/**
 * Created by zhouyong on 15-1-8.
 */
function get_commodities(){
    return [
        new Commodity('ITEM000000','饮料', '可口可乐', '可口可乐350ml', '瓶', 3.00),
        new Commodity('ITEM000010','饮料', '可口可乐', '可口可乐550ml', '瓶', 4.00),
        new Commodity('ITEM000001','饮料', '百事', '雪碧', '瓶', 3.00),
        new Commodity('ITEM000007','饮料', '美汁源', '果粒橙', '瓶', 3.50),
        new Commodity('ITEM000002','水果', '云山', '云山苹果', '斤', 5.50),
        new Commodity('ITEM000003','水果', '云山', '云山荔枝', '斤', 15.00),
        new Commodity('ITEM000004','生活用品', '南孚', '电池', '个', 2.00),
        new Commodity('ITEM000005','食品', '康师傅', '康师傅方便面', '袋', 4.50),
        new Commodity('ITEM000008','饮料', '康师傅', '康师傅冰红茶', '瓶', 3.00),
        new Commodity('ITEM000006','体育用品', '胜利', '羽毛球', '个', 1.00)
    ];
}

function cart_datum(){
    return [
        { 'ITEM000000' : 20 },
        { 'ITEM000010' : 20 },
        { 'ITEM000005' : 30 },
        { 'ITEM000003' : 12 }
    ]
}

function parse_bar_codes_to_commodities_result(){
    return [
        {
            "barCode":"ITEM000000",
            "category":"饮料",
            "brand": "可口可乐",
            "commodityName": "可口可乐350ml",
            "unit": "瓶",
            "price": 3.00,
            "num": 20
        },
        {
            "barCode":"ITEM000010",
            "category":"饮料",
            "brand": "可口可乐",
            "commodityName": "可口可乐550ml",
            "unit": "瓶",
            "price": 4.00,
            "num": 20
        },
        {
            "barCode":"ITEM000005",
            "category":"食品",
            "brand": "康师傅",
            "commodityName": "康师傅方便面",
            "unit": "袋",
            "price": 4.50,
            "num": 30
        },
        {
            "barCode":"ITEM000003",
            "category":"水果",
            "brand": "云山",
            "commodityName": "云山荔枝",
            "unit": "斤",
            "price": 15.00,
            "num": 12
        }
    ]
}
