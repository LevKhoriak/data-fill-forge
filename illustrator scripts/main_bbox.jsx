// Build an exact red outline by copying path points
(function () {
  if (!app.documents.length) return;
  var NAME = "energy_efficiency";
  var item = app.activeDocument.pageItems.getByName(NAME);

  if (item.typename !== "PathItem") { alert('"'+NAME+'" must be a PathItem.'); return; }

  var parent = item.parent;
  var pts = [];
  for (var i=0; i<item.pathPoints.length; i++) {
    var a = item.pathPoints[i].anchor; // [x,y]
    pts.push([a[0], a[1]]);
  }

  var p = parent.pathItems.add();
  p.setEntirePath(pts);
  p.closed = item.closed;
  p.stroked = true; p.strokeWidth = 1; p.filled = false;
  p.name = "__dbg_exact_outline__";

  var c = new RGBColor(); c.red = 255; c.green = 0; c.blue = 0;
  p.strokeColor = c;

  p.zOrder(ZOrderMethod.BRINGTOFRONT);
  alert("Exact outline created from path points.");
})();
