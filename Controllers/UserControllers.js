
import personModel from '../schema.js';

async function run(nameUser, emailUser, passwordUser) {
  try {
    const user = await personModel.create({
      name: nameUser,
      email: emailUser,
      password: passwordUser,
    });
  } catch (e) {
    console.log(e.message);
  }
}

async function find(idUser) {
  try {
    return await personModel.findById(idUser);
  } catch (e) {
    console.log(e.message);
  }
}

async function update(objUser, idUser) {
  try {
    const user = await personModel.findOneAndUpdate(
      { _id: idUser },
      { name: objUser }
    );
    return user;
  } catch (e) {
    console.log(e.message);
  }
}

export async function updateData(req, res) {
  const updatedUser = await update(req.body.name, req.params["id"]);
  res.status(200).json({
    data: updatedUser,
    message: "Data Successfully updated!",
    status: 200,
  });
}

export async function findData(req, res) {
  const findUser = await find(req.params["id"]);
  res.status(200).json({
    data: findUser,
    message: "Data Successfully found!",
    status: 200,
  });
}

export function insertData(req, res) {
  run(req.body.name, req.body.email, req.body.password);
  res.status(200).json({
    data: req.body,
    message: "Data Successfully added!",
    status: 200,
  });
}