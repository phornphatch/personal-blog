# How to start project
## Prerequisite
- NodeJS 14.16.x (LTS) (recommend installation with [nvm](https://github.com/nvm-sh/nvm))
- Yarn
```shell
npm i -g yarn
yarn
```
## Strapi back-end
- start dev mode by 
```
yarn strapi dev
```

- create your account by going to [Admin page](http://localhost:1337/admin/)
- add some item to project collection by go to this [link](http://localhost:1337/admin/plugins/content-manager/collectionType/application::projects.projects?page=1&pageSize=10&_sort=Title:ASC)

## Nextjs front-end
- cd into `front-end` folder
```
cd front-end
```
- run `yarn dev`
```
yarn dev
```

## Deployments
wip
