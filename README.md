## Description

this app is use to know the latest price of foreign exchange

## Installation & How to run

1. install docker
   [Install docker in Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)

   [Install docker in Windows](https://docs.docker.com/docker-for-windows/install/)

2. Build docker image

   ```
   cd your_project_folder/
   sudo docker build -t awesome-currency-converter .
   ```

3. RUN docker Container

   ```
   sudo docker run -dit -p 3000:3000 --name awesome-currency-app-container awesome-currency-converter
   ```

4. Open your browser at http://localhost:3000

### GET into docker

Make sure awesome-currency-app-container is running

```
sudo docker attach awesome-currency-app-container
```

### How To Test

1. get into docker container
2. run

```
yarn test
```

### Folder Structure

I use Ducks folder structure.
Pros:

- I will be easier to me to find all depedency of a module
- easier to move a component

Cons:

- There will be many sub folder if the module very compleks
- should decide to move or promote a component or utils which used by many other component

### Code Structure

All the logic and fetching api is controlled on the top of component modules. and the rest component receive it from props.
