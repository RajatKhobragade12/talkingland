const pointSchema = require("../models/pointModel");

const createPoint = async (req, res) => {
    try {
        const { name, latitude, longitude } = req.body;
        if (!name || !latitude || !longitude) {
            return res.status(400).send({ message: "Missing data" });
        }
        const location = {
            coordinates: {
                latitude: latitude,
                longitude: longitude
            }
        };        
        const result = await pointSchema.create({ name: name, location: location });
        return res.status(201).send({ message: "Data created successfully", data: result });

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error });

    }

}


const retriveAllPoint = async (req, res) => {
    try {
        const points = await pointSchema.find();
        return res.status(200).send({ message: "Retrive data successfully", data: points });

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error", error });
    }
};


const updatePoint = async (req,res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: "Missing point ID" });
        }
        const { name, latitude, longitude } = req.body;
        if (!name && latitude === undefined && longitude === undefined) {
            return res.status(400).send({ message: "No valid fields to update" });
        }

        const updateData = {
            location: {
                coordinates: {
                    latitude: latitude,
                    longitude: longitude
                }
            }
        }
        const updatedPoint = await pointSchema.findByIdAndUpdate(
            id,
            { name, location: updateData.location },
            { new: true }
        );
        if (!updatedPoint) return res.status(404).json({ message: 'Point not found' });
        return res.status(200).send({ message: "data updated successfully", data: updatedPoint });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createPoint, retriveAllPoint, updatePoint
}