const moment=require('moment');
const {
  Model,Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Effdel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Effdel.getDeletedRecords=async()=>{
      let records= await sequelize.models.Effdel.findAll({where:{deletedAt:{[Op.not]:null}},paranoid:false});
      if(!records) throw new Error('no records');
      return records;
    }
  Effdel.forceDeleteRecords=async(records)=>{
    const present=new moment(new Date());
    for(let record of records)
    {
      if(moment.duration(present.diff(new moment(record.deletedAt))).asMinutes()>=10)
      {
        await record.destroy({force:true});
      }
    }
    
  }
  Effdel.init({
    data: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Effdel',
  });
  return Effdel;
};