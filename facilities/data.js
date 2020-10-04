var nodes_list = [
  {
    name: "plant1",
    id: "plant1",
    metadata: {
      location: "California, Cupertino, 95014",
      manager: "Hang Zhang",
    },
  },
  {
    name: "plant2",
    id: "plant2",
    metadata: {
      location: "California, Cupertino, 95014",
      manager: "Someone Unknown",
    },
  },
  {
    name: "Oven1",
    id: "oven1",
    metadata: { model: "super oven X", lastService: "2020-9-10" },
  },
  {
    name: "Oven2",
    id: "oven2",
    metadata: { model: "super oven X", lastService: "2020-9-10" },
  },
  {
    name: "Oven3",
    id: "oven3",
    metadata: { model: "super oven X", lastService: "2020-9-10" },
  },
  {
    name: "Packer-1",
    id: "packer1",
    metadata: { model: "super packer i", lastService: "2020-9-10" },
  },
  {
    name: "Packer-2",
    id: "packer2",
    metadata: { model: "super packer i", lastService: "2020-9-10" },
  },
  {
    name: "Oven21",
    id: "oven21",
    metadata: { model: "super oven X", lastService: "2020-9-10" },
  },
  {
    name: "Oven22",
    id: "oven22",
    metadata: { model: "super oven X", lastService: "2020-9-10" },
  },
  {
    name: "Packer-21",
    id: "packer21",
    metadata: { model: "super packer i", lastService: "2020-9-10" },
  },
];

var edges_list = [
  { source: "plant1", destination: "oven1" },
  { source: "plant1", destination: "oven2" },
  { source: "plant1", destination: "oven3" },
  { source: "plant1", destination: "packer1" },
  { source: "plant1", destination: "packer2" },
  { source: "plant2", destination: "oven21" },
  { source: "plant2", destination: "oven22" },
  { source: "plant2", destination: "packer21" },
];

var locations = {};

function getNodeMetadata(id) {
  var found = nodes_list.find(function (n) {
    return n.id === id;
  });
  if (found && !!found.metadata) {
    return Object.keys(found.metadata).reduce(function (a, c) {
      return a + c + ": " + found.metadata[c] + "<br />";
    }, "");
  }
  return null;
}
