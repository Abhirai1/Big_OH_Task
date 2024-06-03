# Node.js Assignment

## Technologies Used
- Node.js
- Sequelize (ORM)
- PostgreSQL (Database)

## Setup
1. Install dependencies:
    ```bash
    npm install
    ```
2. Configure your PostgreSQL database in `config/config.json`.
3. Run the server:
    ```bash
    node server.js
    ```

## API Endpoints
### Create a Form
- **URL:** `POST /form`
- **Body:**
    ```json
    {
      "uniqueId": "uuid",
      "title": "string",
      "name": "string",
      "email": "email",
      "phoneNumber": "number",
      "isGraduate": "boolean"
    }
    ```

### Fill Data
- **URL:** `POST /fill_data?form_title=user`
- **Body:**
    ```json
    {
      "uniqueId": "uuid",
      "title": "string",
      "name": "Test User",
      "email": "test@example.com",
      "phoneNumber": 9876541230,
      "isGraduate": true
    }
    ```

### Get All Data
- **URL:** `GET /fill_data?form_title=user`
- **Response:** Array of all user data.

## Validation
Ensure that every key in the request is as per the type defined in the create form API.
