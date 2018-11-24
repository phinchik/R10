import Realm from "realm";

const Faves = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "int",
    faved_on: { type: "date" }
  }
};
const realm = new Realm({ schema: [Faves] });

export default realm;
