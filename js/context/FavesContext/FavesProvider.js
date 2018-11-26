import React, { Component } from "react";
import realm from "../../config/models";
// import the Realm helpers you just created here
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount() {
    this.getAllFaves();
  }

  createFave = (id, date) => {
    realm.write(() => {
      realm.create("Faves", { id, faved_on: new Date() });
    });
    this.getAllFaves();
  };

  // allFaves = () => {
  //   let faves = realm.objects("Faves").map(p => p.id);
  //   return faves;
  // };

  // refreshStateIds = () => {
  //   this.setState({ faveIds: this.allFaves() });
  // };

  deleteFave = id => {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey("Faves", id));
      let favs = realm.objects("Faves");
      this.setState({ faveIds: favs });
    });
    this.getAllFaves();
  };

  getAllFaves() {
    realm.write(() => {
      let favs = realm.objects("Faves");
      this.setState({ faveIds: favs });
    });
  }

  // reset() {
  //   this.getAllFaves();
  // }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          queryAllFaves: this.queryAllFaves,
          deleteFave: this.deleteFave,
          createFave: this.createFave
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
