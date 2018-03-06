var recipes = new Object ({})
function updateObjectWithKeyAndValue(obj, key, value){
  var newOBJ = Object.assign({}, obj)
  newOBJ[key] = value
  return newOBJ
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key){
  var ob2 = obj
  var newOBJ = Object.assign({}, ob2)
  delete newOBJ.key
  return newOBJ
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete 
  obj.key
  return obj
}