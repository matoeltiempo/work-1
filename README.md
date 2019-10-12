# Project "Express"

### Установка и запуск проекта
1. Скачайте сборку архивом или используя команду:
```git clone git@github.com:matoeltiempo/work-1.git```
2. Запустить установку через терминал:
```npm i```
3. Выбрать неообходимый вариант сборки:
```
# production
npm run start
# develop
npm run dev
```
### Сервер будет доступен по [адресу](http://localhost:3000/)
- в ответ на запрос ```GET localhost:3000/users``` сервер вернёт JSON-объект из файла users.json;
- в ответ на запрос ```GET localhost:3000/cards``` сервер вернёт JSON-объект из файла cards.json;
- в ответ на запрос ```GET localhost:3000/users/8340d0ec33270a25f2413b69``` сервер вернёт JSON-объект пользователя;
