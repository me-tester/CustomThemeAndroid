function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        left: "25dp",
        right: "25dp",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        height: "40dp",
        width: "70dp",
        top: "10dp",
        color: "red",
        title: "Text 1",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        height: "40dp",
        width: "70dp",
        top: "10dp",
        color: "red",
        title: "Text 2",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;