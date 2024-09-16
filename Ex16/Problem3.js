let userCount = 0;
function incrementUserCount() {
   userCount++;
    return userCount;
    }

function incrementUserCount2(userCount) {
    return userCount + 1;
}

console.log(incrementUserCount());
console.log(incrementUserCount());
userCount = 0;
userCount = (incrementUserCount2(userCount));
console.log(userCount);
userCount = (incrementUserCount2(userCount));
console.log(userCount);