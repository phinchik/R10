import Realm from "realm";

const Faves = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "int",
    faved_on: { type: "date" }
  }
};

const UpdatedFaves = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: { type: "date" }
  }
};

const realm = new Realm({ schema: [UpdatedFaves], schemaVersion: 1 });

export default realm;
