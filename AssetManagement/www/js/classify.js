/*!
 * =====================================================
 * SUI Mobile - http://m.sui.taobao.org/
 *
 * =====================================================
 */
+function (a) {
    a.smConfig.rawCategoriesData = [{
        name: "房屋及设备",
        sub: [{name: "请选择", sub: []}, {
            name: "房屋",
            sub: [{name: "请选择"}, {name: "商业及服务用房"}, {name: "办公用房"}, {name: "仓储用房"}, {name: "其他用房"}],
            type: 0
        }, {
            name: "设施",
            sub: [{name: "请选择"}, {name: "门禁系统"}, {name: "供水系统"}, {name: "停车设备"}, {name: "室内照明及灯具"}, {name: "电梯"}, {name: "中央空调"}, {name: "房屋及其他附属设备"}, {name: "电梯配套设备"},{name:"冷却塔"},{name:"冷水机组"},{name:"高低压配电柜"},{name:"LED招牌"},{name:"园区其他配套设施"}],
            type: 0
        }, {name: "其他", sub: [], type: 0}],
        type: 1
    },{
        name: "电器设备",
        sub: [{name: "请选择"}, {name: "电源"}, {name: "冰箱"}, {name: "冷柜"},{name: "空调"}],
        type: 0
    }, {
        name: "办公设备",
        sub: [{name: "请选择", sub: []}, {
            name: "电脑",
            sub: [{name: "请选择"}, {name: "服务器"}, {name: "台式机"}, {name: "笔记本电脑"}, {name: "掌上电脑pad"},{name:"终端机（云端机）"}],
            type: 0
        }, {
            name: "网络设备",
            sub: [{name: "请选择"}, {name: "路由器"}, {name: "交换机"}, {name: "防火墙"}, {name: "机柜"}],
            type: 0
        }, {
            name: "存储设备",
            sub: [{name: "磁盘阵列"}, {name: "移动硬盘"}, {name: "U盘"}, {name: "内存条"}, {name: "数字证书USBkey"}],
            type: 0
        }, {name: "其他", sub: [], type: 0}],
        type: 1
    }, {name: "其他",sub: [], type: 0}]
}(Zepto), +function (a) {
    "use strict";
    var b, c = function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c];
            "请选择" !== d.name && b.push(d.name)
        }
        return b.length ? b : [""]
    }, d = function (a) {
        return a.sub ? c(a.sub) : [""]
    }, e = function (a) {
        for (var b = 0; b < g.length; b++)if (g[b].name === a)return d(g[b]);
        return [""]
    }, f = function (a, b) {
        for (var c = 0; c < g.length; c++)if (g[c].name === a)for (var e = 0; e < g[c].sub.length; e++)if (g[c].sub[e].name === b)return d(g[c].sub[e]);
        return [""]
    }, g = a.smConfig.rawCategoriesData, h = g.map(function (a) {
        return a.name
    }), i = d(g[0]), j = [""], k = h[0], l = i[0], m = j[0], n = {
        cssClass: "city-picker",
        rotateEffect: !1,
        onChange: function (a, c, d) {
            var g, h = a.cols[0].value;
            return h !== k ? (clearTimeout(b), void(b = setTimeout(function () {
                var b = e(h);
                g = b[0];
                var c = f(h, g);
                a.cols[1].replaceValues(b), a.cols[2].replaceValues(c), k = h, l = g, a.updateValue()
            }, 200))) : (g = a.cols[1].value, void(g !== l && (a.cols[2].replaceValues(f(h, g)), l = g, a.updateValue())))
        },
        cols: [{textAlign: "center", values: h, cssClass: "col-province"}, {
            textAlign: "center",
            values: i,
            cssClass: "col-city"
        }, {textAlign: "center", values: j, cssClass: "col-district"}]
    };
    a.fn.categoryPicker = function (b) {
        return this.each(function () {
            if (this) {
                var c = a.extend(n, b);
                if (c.value)a(this).val(c.value.join(" ")); else {
                    var d = a(this).val();
                    d && (c.value = d.split(" "))
                }
                c.value && (c.value[0] && (k = c.value[0], c.cols[1].values = e(c.value[0])), c.value[1] ? (l = c.value[1], c.cols[2].values = f(c.value[0], c.value[1])) : c.cols[2].values = f(c.value[0], c.cols[1].values[0]), !c.value[2] && (c.value[2] = ""), m = c.value[2]), a(this).picker(c)
            }
        })
    }
}(Zepto);// JavaScript Document