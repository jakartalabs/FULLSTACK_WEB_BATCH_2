const Address = require('../models/address');
const Users = require('../models/users');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const { uuid } = req.user
      const user = await Users.findOne({
        attributes: ['id'],
        where: {
          uuid
        }
      });
      const listAddress = await Address.getAll(user.id);
      if (listAddress) {
        return res.status(200).json(listAddress);
      }
      return res.status(400).json({ message: 'Data empty' });
    } catch (error) {
      return next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { uuid } = req.user
      const user = await Users.findOne({
        attributes: ['id'],
        where: {
          uuid
        }
      });
      const { id } = req.params;
      const address = await Address.findOne(
        {
          where: {
            id,
            userId:user.id
          }
        }
      )

      if (address) {
        return res.status(200).json(address);
      }
      return res.status(400).json({ message: 'Address not foun' });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { uuid } = req.user
      const user = await Users.findOne({
        attributes: ['id'],
        where: {
          uuid
        }
      });
      const { provinceName, city, subDistrict, postalCode, detailAddress } = req.body;
      const created = await Address._create({
        userId: user.id,
        provinceName,
        city,
        subDistrict,
        postalCode,
        detailAddress
      })

      if (created) {
        return res.status(201).end();
      }
      return res.status(400).json({ message: 'Error creating address' });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { uuid } = req.user
      const {id} = req.params;
      const user = await Users.findOne({
        attributes: ['id'],
        where: {
          uuid
        }
      });
      const { provinceName, city, subDistrict, postalCode, detailAddress, isSelected } = req.body;
      const updated = await Address.update({
        provinceName, 
        city, 
        subDistrict, 
        postalCode, 
        detailAddress, 
        isSelected
      }, {
        where: {
          id,
          userId: user.id
        }
      })
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Update address failed' });
    } catch (error) {
      next(error);
    }
  }
}