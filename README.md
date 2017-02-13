# Tile Server UI

## Overview
This project aims to provide a user interface for tile servers.
There is no default tile-server on this UI, so you have to add your own according to the leaflet notation (e.g. https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png).
All tile servers will be stored in the [local storage](https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage) of your browser.

![screenshot](https://raw.github.com/Joxit/tile-server-ui/master/screenshot.png "Screenshot of Tile Server UI")

## Getting Started
### Basic
First you need node and npm in order to download dependencies.

```sh
git clone https://github.com/Joxit/tile-server-ui.git
cd tile-server-ui
npm install
```

Now you can open index.html with your browser or use a http-server
```sh
npm install -g http-server
http-server
```

### Docker
The docker contains the source code and a node webserver in order to serve the tile-server-ui.

#### Get the docker image
You can get the image in three ways

From sources with this command :
```sh
git clone https://github.com/Joxit/tile-server-ui.git
docker build -t joxit/tile-server-ui tile-server-ui
```

Or build with the url :
 ```sh
docker build -t joxit/tile-server-ui github.com/Joxit/tile-server-ui
```

Or pull the image from [docker hub](https://hub.docker.com/r/joxit/tile-server-ui/) :
```sh
docker pull joxit/tile-server-ui
```

#### Run the docker
To run the docker and see the website on your 80 port, try this :
```sh
docker run -d -p 80:80 joxit/tile-server-ui
```
