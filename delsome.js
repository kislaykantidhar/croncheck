let {Effdel}=require('./models');
let del=async(id)=>{
	await Effdel.destroy({where:{id:id}});
	
}

for(let i=1;i<7;i++)
{
	del(i);
}
setTimeout(function() {
	for(let i=7;i<14;i++)
	{
		del(i);
	}
}, 300000);