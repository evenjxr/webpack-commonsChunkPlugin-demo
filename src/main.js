const component1 = function(resolve) {
  return require(['./a'], resolve)
}
const component2 = function(resolve) {
  return require(['./b'], resolve)
}
console.log(component1, component2, $, 'a')