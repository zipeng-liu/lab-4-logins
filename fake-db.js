
const users = [
  { username: 'a_dawg', password: 'woofwoof' },
  { username: 'b_izzle', password: 'snoop' },
  { username: 'these_names_got_silly', password: 'i feel stupid' },
]


function getUserByUsername(uname) {
  let matches = users.filter(({username}) => uname === username);
  if (matches.length === 1) {
    return matches[0];
  } else {
    if (matches.length > 1) {
      console.error(`WTF there are ${matches.length} users in the DB with the username ${uname}`)
    }
    return null;
  }
}


module.exports = {
  getUserByUsername,
}