import React, { Component } from "react";
import realm from "../../config/models";
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

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          deleteFave: this.deleteFave,
          createFave: this.createFave,
          getAllFaves: this.getAllFaves
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
