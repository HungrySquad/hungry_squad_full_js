## hungry_squad_full_js 
Frontend and API for Users

#### Command to install deps:
yarn install

#### Command to start:
yarn dev

#### Install yarn (Also, If you get `00h00m00s 0/0: : ERROR: [Errno 2] No such file or directory: 'install'`):
~~~bash
sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
~~~
