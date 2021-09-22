Инструкция по запуску приложения:

1) Создать папку и клонировать репозиторий - git clone https://github.com/medivh322/severstal-test.git
2) в клонированном репозитории установить пакеты - node install
3) запустить приложение - npm start

Структура с описанием:
``` bash
├── ...
└── src                     # папка проекта
    ├── components          # папка с компонентами
    │   ├── loginForm       # компонент с формой авторизации
    │   ├── news            # компонент новостей
    │   ├── profile         # компонент авторизованного профиля
    │   ├── profileRoute    # компонент с логикой авторизации
    ├── redux               # папка с настройками редакса, саг
    │   ├── constants       # константы
    │   ├── sagas           # все саги проекта
    │   ├── store           # настройки стора
    ├── App.js              # главный компонент с роутингом
    ├── index.css           # стили
    ├── index.js            # компонент с подключением стора
    └── ...
```