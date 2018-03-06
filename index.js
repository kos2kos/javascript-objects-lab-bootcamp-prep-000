var recipes = new Object ({})
function updateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key){
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key){
  var newOBJ = Object.assign({}, obj)
  delete newOBJ.key
}