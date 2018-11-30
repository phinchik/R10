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

  createFave = async (id, date) => {
    try {
      await realm.write(() => {
        realm.create("Faves", { id, faved_on: new Date() });
      });
      this.getAllFaves();
    } catch (err) {
      console.log(err);
    }
  };

  deleteFave = async id => {
    try {
      await realm.write(() => {
        realm.delete(realm.objectForPrimaryKey("Faves", id));
        let favs = realm.objects("Faves");
        this.setState({ faveIds: favs });
      });
      this.getAllFaves();
    } catch (err) {
      console.log(err);
    }
  };

  getAllFaves = async () => {
    try {
      await realm.write(() => {
        let favs = realm.objects("Faves").map(fave => fave.id);
        this.setState({ faveIds: favs });
      });
    } catch (err) {
      console.log(err);
    }
  };

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
