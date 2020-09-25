
let {Effdel}=require('./models')
exports.time=async()=>{
	let vals=await Effdel.getDeletedRecords();
	
	let confirmation=await Effdel.forceDeleteRecords(vals);
}