import firebase from "firebase/app";
export default {
  state: {
    imageData: null,
    picture: null,
    uploadValue: 0,
  },
  getters: {
    IMAGEDATA: (state) => {
      return state.imageData;
    },
    PICTURE: (state) => {
      return state.picture;
    },
    UPLOADVALUE: (state) => {
      return state.uploadValue;
    },
  },
  mutations: {
    PREVIEW_IMAGE(state, event) {
      state.uploadValue = 0;
      state.picture = null;
      state.imageData = event.target.files[0];
    },
    ON_UPLOAD(state) {
      state.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${state.imageData.name}`)
        .put(state.imageData);
      storageRef.on(
        `state_changed`,
        () => {},
        (error) => {
          console.log(error.message);
        },
        () => {
          console.log("complete");
        }
      );
    },
  },
  actions: {},
};
