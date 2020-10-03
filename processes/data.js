var nodes_list = [
  { name: "potato-orig", id: "potatooriginalsm" },
  { name: "Oven1", id: "oven1" },
  { name: "Oven2", id: "oven2" },
  { name: "Oven3", id: "oven3" },
  { name: "Packer-1", id: "packer1" },
  { name: "Packer-2", id: "packer2" },
  { name: "Oven21", id: "oven21" },
  { name: "Oven22", id: "oven22" },
  { name: "Packer-21", id: "packer21" },
  { name: "plant1", id: "plant1", location: true },
  { name: "plant2", id: "plant2", location: true },
];

var edges_list = [
  { source: "potatooriginalsm", destination: "oven1" },
  { source: "potatooriginalsm", destination: "oven2" },
  { source: "potatooriginalsm", destination: "oven3", disabled: true },
  { source: "potatooriginalsm", destination: "oven21", disabled: true },
  { source: "potatooriginalsm", destination: "oven22", disabled: true },
  { source: "oven1", destination: "packer1" },
  { source: "oven2", destination: "packer1" },
  { source: "oven3", destination: "packer2", disabled: true },
  { source: "oven21", destination: "packer21", disabled: true },
  { source: "oven22", destination: "packer21", disabled: true },
];

var locations = {
  plant1: ["oven1", "oven2", "oven3", "packer1", "packer2"],
  plant2: ["oven21", "oven22", "packer21"],
};
