var SVG_ID = "dag";

// create tooltip
var div_tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

var margin = { top: 50, right: 50, bottom: 50, left: 150 };

var svg = d3
  .select("body")
  .append("svg")
  .attr("id", SVG_ID)
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight);

var svgGroup = svg.append("g");

function hide_nodes_edges(hide) {
  var edges = svgGroup.selectAll(".edge");
  var nodes = svgGroup.selectAll(".node");
  edges._groups[0].forEach(function (edge) {
    if (hide) {
      edge.classList.add("invisible");
    } else {
      edge.classList.remove("invisible");
    }
  });
  nodes._groups[0].forEach(function (node) {
    if (hide) {
      node.classList.add("invisible");
    } else {
      node.classList.remove("invisible");
    }
    node.classList.remove("selected");
  });
}

function connected_nodes_edges(d) {
  hide_nodes_edges(true);
  var edges = svgGroup.selectAll(".edge");
  var nodes = svgGroup.selectAll(".node");
  var selected_node_id = {};

  edges._groups[0].forEach(function (edge) {
    var source_id = edge.id.split("-")[0];
    var destination_id = edge.id.split("-")[1];

    if (source_id === d.id) {
      selected_node_id[destination_id] = true;
    }
    if (destination_id === d.id) {
      selected_node_id[source_id] = true;
    }

    if (source_id === d.id || destination_id === d.id) {
      edge.classList.remove("invisible");
    }
  });

  nodes._groups[0].forEach(function (node) {
    var nid = "" + node.id;
    if (selected_node_id[nid] === true || nid === d.id) {
      node.classList.remove("invisible");
    }
  });
}

function createGraph() {
  // Create the input graph
  var g = new dagreD3.graphlib.Graph({ compound: true })
    .setGraph({
      align: "UL",
      rankdir: "LR",
      ranker: "longest-path",
      nodesep: 25,
    })
    .setDefaultEdgeLabel(function () {
      return {};
    });

  nodes_list.forEach(function (node) {
    g.setNode(node.id, {
      label: node.name,
      class: "node",
      id: node.id || "0",
      style: node.location === true ? "fill: #efefef; rx:10, ry:10" : undefined,
      clusterLabelPos: "top",
    });
  });

  g.nodes().forEach(function (v) {
    var node = g.node(v);
    node.rx = node.ry = 5;
  });

  var groups = locations || {};
  if (groups) {
    Object.keys(groups).forEach(function (k) {
      groups[k].forEach(function (c) {
        g.setParent(c, k);
      });
    });
  }

  // Set up edges, no special attributes.
  edges_list.forEach(function (edge) {
    g.setEdge(edge.source, edge.destination, {
      curve: d3.curveBasis,
      id: String(edge.source) + "-" + String(edge.destination),
      class: edge.disabled ? "edge unselected-edge" : "edge",
      label: edge.label || "",
    });
  });

  var zoom = d3.zoom().on("zoom", function () {
    d3.select("svg g").attr("transform", d3.event.transform);
  });
  svg.call(zoom);
  svg.call(
    zoom.transform,
    d3.zoomIdentity.scale(1).translate(margin.left, margin.top)
  );

  d3.select("svg g")
    .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
    .call(zoom);
  svg.call(zoom);

  // Create the renderer
  var render = new dagreD3.render();

  // Run the renderer. This is what draws the final graph.
  render(d3.select("svg g"), g);

  // Center the graph
  svgGroup.attr(
    "transform",
    "translate(" + margin.left + "," + margin.right + ")"
  );

  nodes = svgGroup.selectAll(".node");

  nodes.on("click", function (d) {
    d3.event.stopPropagation();
    clicked_elem = this;
    selected_nodes = connected_nodes_edges(clicked_elem);
    clicked_elem.classList.add("selected");
  });

  nodes
    .on("mouseover", function (d) {
      var content = getNodeMetadata(d);
      if (content) {
        div_tooltip.transition().duration(200).style("opacity", 0.8);
        div_tooltip
          .html(content)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
      }
    })
    .on("mouseout", function (d) {
      div_tooltip.transition().duration(500).style("opacity", 0);
    });

  svg.on("click", function () {
    hide_nodes_edges(false);
  });
}

createGraph();
