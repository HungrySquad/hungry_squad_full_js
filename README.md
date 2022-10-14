## hungry_squad_full_js

Frontend and API for Users

### Installation

#### Install Node Js

nvm install 16.15.1

#### Install Dependecies:

yarn install

**For Server:**
yarn install --cwd server

**For Client**
yarn install --cwd client

#### Command to start:

yarn dev

#### Install yarn (Also, If you get `00h00m00s 0/0: : ERROR: [Errno 2] No such file or directory: 'install'`):

```bash
sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
```

Docker:
docker image build . -t hungrysquad
docker container run -p 5000:5000 -e PORT=5000 -e DB_USERNAME=hungry_squad -e DB_PASSWORD=adminPassword123 -e NODE_ENV=production hungrysquad -- use this command to run
docker container run -p 5000:5000 --env-file ./env.production hungrysquad
docker exec -it container_id bash
