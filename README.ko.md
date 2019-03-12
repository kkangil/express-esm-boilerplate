# Express ESM Boilerplate

## Getting started

Read this in other languages: [English](README.md), [한국어](README.ko.md)

```sh
# 프로젝트 복제
git clone https://github.com/edkimco/express-esm-sequelize-boilerplate.git
cd express-esm-sequelize-boilerplate

# 의존성 설치
npm install

# Yarn을 쓰신다면
yarn
```

## 프로젝트 실행
### 1. 로컬 실행
```sh
# 로컬 서버 프로세스 실행
yarn start # npm run start
```
### 2. PM2를 활용하여 서버 실행
```sh
# 의존성 설치
yarn

# pm2에 진입 소스 등록
sudo yarn deploy
```
- 원하는 port로 웹 서비스를 실행하려면 ecosysyem.config.js의 port 값을 수정하세요.

## Basic APIs
### Normal
#### AUTH
| METHOD | URI | Purpose |
| ------ | --- | ------- |
| `POST` | /api/{VERSION}/signup            | Signup                        |
| `POST` | /api/auth/login                  | Login                         |

#### POSTS
| METHOD | URI | Purpose |
| ------ | --- | ------- |
| `GET` | /api/{VERSION}/posts                    | GET Posts with Pagination |
| `POST` | /api/{VERSION}/posts                   | CREATE a new post |
| `PUT` | /api/{VERSION}/posts/{POST_ID}          | UPDATE a post |
| `DELETE` | /api/{VERSION}/posts/{POST_ID}       | DELETE a post |

### Admin
#### Users
#### Posts
| METHOD | URI | Purpose |
| ------ | --- | ------- |
| `GET` | /api/{VERSION}/admin/posts                    | GET Posts with Pagination |
| `DELETE` | /api/{VERSION}/admin/posts/{POST_ID}       | DELETE a post |

## Features

- Versioning APIs
  - `/api/v1.0`, `/api/v1.1`...
- Initializing database for test or default models
  - check file named `db.js`
- ADD Indexing to `deleted` field on each models

## License
MIT License. See the [LICENSE](LICENSE) file.
