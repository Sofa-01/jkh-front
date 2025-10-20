# ЖКХ фронтенд (SPA)

Запуск
- cd app
- npm i
- npm run dev (http://localhost:5173)

Сборка
- npm run build
- npm run preview

Структура
- app/src/auth — страницы входа/регистрации
- app/src/layout — макет админ-панели с меню
- app/src/pages — экраны: пользователи, районы, ЖЭУ, объекты, чек-листы, инспекторы

Интеграция с backend (Go + Ent, PostgreSQL)
- Пока используются мок-данные; затем подключите REST API (JSON)
- Роутинг — React Router v6, стили — CSS Modules
