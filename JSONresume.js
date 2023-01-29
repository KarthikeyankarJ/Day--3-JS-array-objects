//Own Resume data file in JSON format 

const studentResume = 
{
  "name": "Karthikeyan Jaganathan",
  "Phone" : "877XXXX630",
  "Address" : "2-54 A AnnaNagar, Elayamuthur.",
  "DOB" : "04 JAN 1997",
  "Summary": "The person with lot of dedication and have a good knowledge in automobile sector with nearly two years of experience in system level vehicle teardown and currently I'm pursuing Full stack developer in Guvi",
  "Education": "BE Mech",
  "Experience": "2 years in Caresoft global as Engineer",
  "Achivement": ["In 2017, I participated in a world record event in Codicia Coimbatore","PAT ON BACK Award for Q3&Q4 2021 in Carsoft", "Rasing Star Award for Q1 2022 in Caresoft","Team Player Award for Q3 2022 in Caresoft"],
  "Skill": ["JS","HTML","CSS","Photoshop","CATIA"],
  "Language": ["Tamil",'English'],
  "Hobby":["Watching automobile news with technical info","playing cricket"],
}

//JSON iterated over all loops (for, for in, for of, forEach)

var studentkeys=Object.keys(studentResume)


console.log('****************for****************')

// for loop tradition method to iterate the string, value etc...

for(i=0;i<studentResume.Achivement.length;i++){
  console.log('*',studentResume.Achivement[i])
}


console.log('****************for in****************')

// mostly used in array index

for(key in studentResume){
	console.log(key,':', studentResume[key])
 }
 

 console.log('****************for of****************');

// mostly used to iterate Array & String

for(b of studentResume.Skill){
  console.log(b)
}


 console.log('****************forEach****************');

// mostly used to iterate array

studentkeys.forEach((val,indx)=>{
	console.log(indx,'=>',studentResume[val])
 })

 





