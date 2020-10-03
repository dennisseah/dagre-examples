var nodes_list = [
  { name: "plant1", id: "plant1" },
  { name: "plant2", id: "plant2" },
  { name: "Oven1", id: "oven1" },
  { name: "Oven2", id: "oven2" },
  { name: "Oven3", id: "oven3" },
  { name: "Packer-1", id: "packer1" },
  { name: "Packer-2", id: "packer2" },
  { name: "Oven21", id: "oven21" },
  { name: "Oven22", id: "oven22" },
  { name: "Packer-21", id: "packer21" },
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
