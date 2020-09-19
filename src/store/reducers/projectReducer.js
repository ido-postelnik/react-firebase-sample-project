const initState = {
  projects: [
    { id: "1", title: "title 1", content: "lorem ipsum" },
    { id: "2", title: "Great title", content: "wowwwwww" },
    { id: "3", title: "For real?", content: "yes!" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': {
      console.log('created project: ', action.project);
    }
  };
  return state;
};

export default projectReducer;
