var recipes = new Object ({})
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key){
  var newOBJ = Object.assign({}, obj)
  delete newOBJ.key
  return newOBJ
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete 
  obj.key
  return obj
}