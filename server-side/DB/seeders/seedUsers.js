import userModel from "../../src/modules/user/models/user.model.js";

const seededUsers = [
  {
    "_id": "64a2835d0d891295bcb000c8",
    userName: "Mina ELan",
    password: "dkssldkf",
  },
  {
    "_id": "64a2836b0d891295bcb000ca",
    userName: "Farouk Shawky",
    password: "skdlfkl",
  },
  {
    "_id": "64a283720d891295bcb000cc",
    userName: "Elania Gem",
    password: "slaakslsl",
  },
  {
    "_id": "74a283720d891295bcb000cc",
    userName: "Helan Clin",
    password: "akaaq,wekle",
  },
  {
    "_id": "74a283720d891295bcb010cc",
    userName: "Fady Hady",
    password: "qiqwwwoe",
  },
  {
    "_id": "74a283720d891295bcb020cc",
    userName: "Sara Ahmed",
    password: "pwoskxcl",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb030cc",
    userName: "Ahmed Salah",
    password: "dkfjlkwe",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb040cc",
    userName: "Lina Youssef",
    password: "asdfghjk",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb050cc",
    userName: "Omar Mohamed",
    password: "zxcvbnml",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb060cc",
    userName: "Nour Essam",
    password: "qweertyu",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb070cc",
    userName: "Youssef Samir",
    password: "bikerpass1",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb080cc",
    userName: "Aya Mahmoud",
    password: "bikerpass2",
    role: "biker",
  },
  {
    "_id": "74a283720d891295bcb090cc",
    userName: "Khaled Nasser",
    password: "bikerpass3",
    role: "biker",
  },
  {
    "_id": "74a283720d891296bcb050cc",
    userName: "Laila Kamal",
    password: "bikerpass4",
    role: "biker",
  },
  {
    "_id": "74a283720d891297bcb050cc",
    userName: "Hassan Rizk",
    password: "bikerpass5",
    role: "biker",
  }
];

const seedDB = async () => {
  await userModel.deleteMany({});
  await userModel.insertMany(seededUsers);
};

export default seedDB;
