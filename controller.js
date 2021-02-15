export const handleList = (req, res) => {
  res.render("home");
};

export const postHandleList = (req, res) => {
  const task = req.body.toDo; //input 값
};
