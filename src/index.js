import Sub from './modules/sub';
const sub = new Sub();
console.log(sub.name);

// async・await
async function test() {
  return 'hoge';
}
test().then(e => {
  console.log(e);
});
