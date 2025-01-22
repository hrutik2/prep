//Array Flattening
function flattenArray(arr, depth) {
  if(depth==undefined){
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
          acc.push(...flattenArray(item, depth - 1));
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
  }
  else{
  if (depth === 0) {
    return arr;
  } else {
    return arr.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(...flattenArray(item, depth - 1));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }
 }
}

function flattenObject(object) {
    const ans = {}
  
    function flatten(obj, parentKey = '') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = parentKey ? `${parentKey}.${key}` : key
  
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            flatten(obj[key], newKey)
          } else {
            ans[newKey] = obj[key]
          }
        }
      }
    }
  
    flatten(object)
    return ans
  }
