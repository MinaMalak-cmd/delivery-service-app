const whitelist = ["http://localhost:3000", undefined];

export const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export const parcelStatuses = {
  PICKED: 'picked',
  PENDING: 'pending',
  DELIVERED: 'delivered'
}

export const systemRoles = {
  USER:'user',
  BIKER:'biker'
}
