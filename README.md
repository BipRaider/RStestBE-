## ### `npm start`

Запуск сервера для работы из папки ./dist после tsl сборщика TypeScript

### `npm run dev`

Запуск сервера для работы над кодом.

Open [http://localhost:3001](http://localhost:3001)

### `npm run build`

Сборка проекта tsl сборщиком TypeScript

### GET `http://localhost:3001/message`

Получения списка отсортированых сообщений по дате добавления

### POST `http://localhost:3001/message`

Добавление нового сообщение

### Использовались библиотеки npm package for build

### TypeScript

typescript ts-loader ts-node ts-node-dev tsconfig-paths tslint

### Express веб-фреймворк для приложений Node.js

https://expressjs.com

express express-mongo-sanitize express-rate-limit

### DataBase MongoDB

mongodb mongoose

### Для валидации данных и защиты данных

cors dotenv helmet hpp joi morgan tedious

### Помойники сборки проекта

husky lint-staged mocha prettier

### Dockerfile https://www.docker.com/

Также можно локально работать с Docker

docker build -t backend:1.0 .

        backend - даём название image
        :1.0    - версия image

docker run -p 3001:3001 <id образа в докере>

        1 -p
        2 local     - порт локального запуска
        3 :         - взаимодействие
        4 container - порт контейнера в докере
        5 id image  -  id  образа в докере

### docker-compose up запустить сборку через compose

Установить докер на пк https://www.docker.com/ перенести файл на уровень выше папок
docker-compose.yml

-
