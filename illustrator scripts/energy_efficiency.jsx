// Group items fully inside "energy_efficiency" (AABB test) and move the group
(function () {
  if (!app.documents.length) { alert("Open a document first."); return; }
  var doc = app.activeDocument;

  // ===== Settings =====
  var RECT_NAME = "energy_efficiency";     // helper item name
  var GROUP_NAME = "energy_efficiency_group";
  var USE_VISIBLE_BOUNDS = true;           // true: visibleBounds, false: geometricBounds
  var RESTRICT_TO_RECT_LAYER = false;      // true: only scan same layer as helper
  var EPS = 0.5;                           // tolerance (pts)
  var MOVE_DX = 50;                        // move right by 50 pt (negative = left)
  var MOVE_DY = 0;                         // vertical move (pts)

  // Normalize Illustrator bounds -> {x0,x1,y0,y1}
  function normBounds(item) {
    var b = (USE_VISIBLE_BOUNDS ? item.visibleBounds : item.geometricBounds); // [top,left,bottom,right]
    var top = Math.min(b[0], b[2]);
    var bot = Math.max(b[0], b[2]);
    var left = Math.min(b[1], b[3]);
    var right = Math.max(b[1], b[3]);
    return { x0: left, x1: right, y0: top, y1: bot };
  }

  // Get helper
  var rect;
  try { rect = doc.pageItems.getByName(RECT_NAME); }
  catch (e) { alert('Item "' + RECT_NAME + '" not found.'); return; }

  var R = normBounds(rect);
  var helperLayer = rect.layer;

  // Pass 1: collect candidates (don’t move yet)
  var toMove = [];
  for (var i = 0; i < doc.pageItems.length; i++) {
    var it = doc.pageItems[i];
    if (it === rect || it.locked || it.hidden) continue;
    if (RESTRICT_TO_RECT_LAYER && it.layer !== helperLayer) continue;

    var B = normBounds(it);

    // Inside test (your inequalities)
    if ((R.x0 <= B.x0 + EPS) &&
        (R.x1 >= B.x1 - EPS) &&
        (R.y0 <= B.y0 + EPS) &&
        (R.y1 >= B.y1 - EPS)) {
      toMove.push(it);
    }
  }

  if (!toMove.length) { alert('Nothing to group inside "' + RECT_NAME + '".'); return; }

  // Create result group in the same layer
  var group = helperLayer.groupItems.add();
  group.name = GROUP_NAME;

  // Pass 2: move items into the group
  var moved = 0, failed = 0;
  for (var j = 0; j < toMove.length; j++) {
    try {
      toMove[j].move(group, ElementPlacement.PLACEATEND);
      moved++;
    } catch (err) {
      failed++;
    }
  }

  // Move the whole group
  if (MOVE_DX || MOVE_DY) group.translate(MOVE_DX, MOVE_DY);

  // Select the result for convenience
  doc.selection = null;
  group.selected = true;

  alert('Grouped ' + moved + ' item(s) into "' + GROUP_NAME + '"' +
        (failed ? (' (' + failed + ' skipped)') : '') +
        ' and moved by (' + MOVE_DX + ', ' + MOVE_DY + ') pt.');
})();
