import userModel from "../../src/modules/user/models/user.model.js";

const seededUsers = [
  {
    userName: "Mina ELan",
    password: "dkssldkf",
  },
  {
    userName: "Farouk Shawky",
    password: "skdlfkl",
  },
  {
    userName: "Elania Gem",
    password: "slaakslsl",
  },
  {
    userName: "Helan Clin",
    password: "akaaq,wekle",
  },
  {
    userName: "Fady Hady",
    password: "qiqwwwoe",
  },
  {
    userName: "Sara Ahmed",
    password: "pwoskxcl",
    role: "biker",
  },
  {
    userName: "Ahmed Salah",
    password: "dkfjlkwe",
    role: "biker",
  },
  {
    userName: "Lina Youssef",
    password: "asdfghjk",
    role: "biker",
  },
  {
    userName: "Omar Mohamed",
    password: "zxcvbnml",
    role: "biker",
  },
  {
    userName: "Nour Essam",
    password: "qweertyu",
    role: "biker",
  },
  {
    userName: "Youssef Samir",
    password: "bikerpass1",
    role: "biker",
  },
  {
    userName: "Aya Mahmoud",
    password: "bikerpass2",
    role: "biker",
  },
  {
    userName: "Khaled Nasser",
    password: "bikerpass3",
    role: "biker",
  },
  {
    userName: "Laila Kamal",
    password: "bikerpass4",
    role: "biker",
  },
  {
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
