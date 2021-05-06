interface UserData {
  name: string;
  username: string;
  email: string;
  password: string;
}

// Partial

function showPartialUserData(user: Partial<UserData>) {
  console.log(user);
}

showPartialUserData({ name: 'Jeziel' });


// Pick

function showPickUserData(user: Pick<UserData, 'name' | 'username'>) {
  console.log(user);
}

showPickUserData({ name: 'Jeziel', username: 'jezielm7' });


// Omit

function showOmitUserData(user: Omit<UserData, 'name'>) {
  console.log(user);
}

showOmitUserData({ username: 'jezielm7', email: 'test@email.com', password: '1234##' });


// Readonly

const newUser: Readonly<UserData> = {
  name: 'Jeziel',
  username: 'jezielm7',
  email: 'test@email.com',
  password: '123456789#'
};