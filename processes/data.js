var nodes_list = [
  { name: "potato-orig", id: "potatooriginalsm", type: "product" },
  { name: "Oven1", id: "oven1", type: "oven" },
  { name: "Oven2", id: "oven2", type: "oven" },
  { name: "Oven3", id: "oven3", type: "oven" },
  { name: "Packer-1", id: "packer1", type: "packer" },
  { name: "Packer-2", id: "packer2", type: "packer" },
  { name: "Oven21", id: "oven21", type: "oven" },
  { name: "Oven22", id: "oven22", type: "oven" },
  { name: "Packer-21", id: "packer21", type: "packer" },
  { name: "plant1", id: "plant1", location: true },
  { name: "plant2", id: "plant2", location: true },
];

var edges_list = [
  { source: "potatooriginalsm", destination: "oven1", label: "selected" },
  { source: "potatooriginalsm", destination: "oven2", label: "selected" },
  { source: "potatooriginalsm", destination: "oven3", disabled: true },
  { source: "potatooriginalsm", destination: "oven21", disabled: true },
  { source: "potatooriginalsm", destination: "oven22", disabled: true },
  { source: "oven1", destination: "packer1", label: "selected" },
  { source: "oven2", destination: "packer1", label: "selected" },
  { source: "oven3", destination: "packer2", disabled: true },
  { source: "oven21", destination: "packer21", disabled: true },
  { source: "oven22", destination: "packer21", disabled: true },
];

var locations = {
  plant1: ["oven1", "oven2", "oven3", "packer1", "packer2"],
  plant2: ["oven21", "oven22", "packer21"],
};

function getNodeMetadata(id) {
  return null;
}
