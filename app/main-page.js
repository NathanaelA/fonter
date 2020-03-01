var view = require('ui/core/view');
var count = 0;
debugger;
exports.tap = function(obj) {
    console.log("On Tap", typeof obj.object);
    var hv = view.getViewById(obj.object.parent,'hv');
    console.log(hv.html);
    count++;
    var off = count % 2;
    switch (off) {
        case 0:
            hv.html = "test www.master-technology.com";
            break;
        case 1:
            hv.html = "Test <a href='http://www.master-technology.com'>MT</a> www.master-technology.com";
            break;
    }
};