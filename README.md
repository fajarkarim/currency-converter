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

### Code Structure

Using Clean code architcture. The General rule of forex exchange app is on entity folder in src/core/entities.
Inside core folder, there are several folder which are adapter, services, and entities. Adapter module have duty to translate bussiness rule into presentation in react. For example when we get data from eksternal api, the manipulation is on adapter module. In react framwork it happens in actions methods.
