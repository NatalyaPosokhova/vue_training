import firebase from "firebase/app";
export default {
  state: {
    images: [],
  },
  getters: {
    IMAGES: (state) => {
      return state.images;
    },
  },
  actions: {
    async GET_IMAGES({ state }) {
      const listOfImages = await firebase
        .storage()
        .ref()
        .listAll();
      listOfImages.items.forEach(async (item) => {
        let url = await firebase
          .storage()
          .ref()
          .child(item.location.path)
          .getDownloadURL();
        try {
          state.images.push(url);
        } catch (e) {
          console.log(e);
        }
      });

      // (async (item) => {
      //     let url = await firebase
      //       .storage()
      //       .ref()
      //       .child(item.location.path)
      //       .getDownloadURL();
      //     state.images.push(url);
      //   });
    },
  },
};
