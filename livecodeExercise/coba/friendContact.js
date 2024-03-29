// var data
var contacts = [{
  Id: 1,
  name: 'Andi',
  gender: 'male',
  group_ids: [1,2,3]
},{
  Id: 2,
  name: 'Budi',
  gender: 'male',
  group_ids: [1,2]
},{
  Id: 3,
  name: 'Cindy',
  gender: 'male',
  group_ids: [1]
},{
  Id: 4,
  name: 'David',
  gender: 'male',
  group_ids: [1,2]
},{
  Id: 5,
  name: 'Emily',
  gender: 'male',
  group_ids: [1,2,3]
}]

// lanjut ke halaman berikutnya
var groups = [{
  id: 1,
  name: 'Teman SMP' 
}, {
  id: 2,
  name: 'Teman SMA' 
}, {
  id: 3,
  name: 'Teman Kuliah' 
}]

funtion friendContact(arr) {
  var output = []
  for(var i = 0; i < arr.length; i++) {
    if(arr == groups[i].name) {
      var pengenal = groups[i].id
    }
  }

  for(var i = 0; i < contacts.length; i++){
    for(var j = 0; j < contacts[i].group_ids.length; j++){
      if(pengenal == contacts[i].group_ids[j]){
        output.push(contacts[i].name);
      }
    }
  }
  return output;

}

console.log(friendContact('Teman Kuliah'))
//["Andi", "Emily"]

console.log(friendContact('Teman SMA'))
//["Andi", "Budi", "David", "Emily"]

console.log(friendContact('Teman SMP'))

//["Andi", "Budi", "Cindy", "David", "Emily"]