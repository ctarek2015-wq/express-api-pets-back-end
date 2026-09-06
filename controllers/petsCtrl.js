const Pet = require("../models/pet.js");

const create = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }
    // res.status(204).json({});
    // res.status(204).end();
    res.status(200).json({ message: `${pet.name} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  deletePet,
};
