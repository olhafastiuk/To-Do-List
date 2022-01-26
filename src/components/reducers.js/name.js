export const name = (state = "-name-", action) => {
  switch (action.type) {
    case "changeName":
      return action.name;
    default:
      return state;
  }
};

export default name;
