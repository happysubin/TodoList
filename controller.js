import ToDo from "./model";

export const handleList = async (req, res) => {
  try {
    const toDo = await ToDo.find({});
    res.render("home", { toDo });
  } catch (error) {
    console.log(error);
    res.render("home", { toDo: [] });
  }
};

export const postHandleList = async (req, res) => {
  const task = req.body.toDo; //input 값
  try {
    const toDo = await ToDo.create({
      task,
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
