const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const validationMiddleware = require("./middleware");

const posts = [
  { id: 1, title: "Soap", description: "This is my post",like:0 },
  { id: 2, title: "Milt", description: "This is my post" ,like:0},
  { id: 3, title: "FOAM", description: "This is my post",like:0 },
  { id: 4, title: "Pillow", description: "This is my post",like:0 },
];

//route endpoints
//REST API
//METHOD: GET, POST, PUT, DELETE ,OPTION
//GET : TO fetch data from server or database, and didnt make any chnage in db
//POST : To insert data into database
//PUT : Tp update the existing data
//Delete : To delete the existing data

//get-post    -> GET
//you create post  -> POST
//delete post    -> DELETE
//like and comment on the post  -> PUT

app.get("/posts", (req, res) => {
  // fetch post from database
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  if (!post.name) {
    return res.send("Please enter a name")
  }
  if (!post.description) {
    return res.send("Please enter a description")
  }
  const obj = {
    id: Math.random(),
    name: post.name,
    description: post.description,
    like:0
  }
  posts.push(obj);

  //save post to database
  return res.send("succesfully saved post to database");
});

app.delete("/posts", (req, res) => {
  const post = req.body;
  if (!post.id) {
    return res.send("Please enter post id to delete")
  }
  const id = post.id;
  let indexToDelete = -1;
  posts.forEach((post,index) => {
    if (post.id === id) { 
      indexToDelete = index;
    }
  })

  if (indexToDelete === -1) {
    return res.send("No post belong to this id")
  }
  delete posts[indexToDelete];
  //delete post from database
  res.send("succesfully deleted post from database");
});

app.put("/posts", (req, res) => {
  const post = req.body;
  if (!post.id) {
    return res.send("PLease provide post id");
  }
  const id = post.id;
  let isIdExists = false;
  
  posts.map((post) => {
    if (post.id === id) { 
      const like = post.like;
      post.like = like + 1;
      isIdExists = true;
    }
  })

  if (isIdExists === false) {
    return res.send("id doest not exist")
  }
  //delete post from database
  const responseObj = {
    message: "succesfully updated post from database",
    data:posts
  };
  res.json(responseObj);
});

app.get("/", (req, res) => {
  res.send("Hello server is up and running");
});

//3000 3030 8000 8080
app.listen(3000, () => {
  console.log("listening on port 3000");
});
