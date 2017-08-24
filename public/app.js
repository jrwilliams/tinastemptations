const {dialog} = require('electron');

let myNotification = new Notification('Title', {
  body: 'Lorem Ipsum Dolor Sit Amet'
});

myNotification.onclick = () => {
  console.log('Notification clicked');
};

console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}));
