// async・awaitを解決
import 'regenerator-runtime';

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

const object = {
  name: 'hoge',
  age: 50
};

console.log(Object.values(object));
console.log(Object.entries(object));
