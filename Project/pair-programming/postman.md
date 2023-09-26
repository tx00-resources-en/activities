
## Testing with Postman

### 1. Register User Request:

**Request Type**: POST
**URL**: `http://localhost:5000/api/users`
**Headers**:
- Key: Content-Type
  Value: application/json
**Body** (raw JSON):
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
Click the "Send" button to register a new user. You should receive a response with a user object and a JWT token.

### 2. Login User Request:

**Request Type**: POST
**URL**: `http://localhost:5000/api/users/login`
**Headers**:
- Key: Content-Type
  Value: application/json
**Body** (raw JSON):
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
Click the "Send" button to log in the user. You should receive a response with a user object and a JWT token.

### 3. Add Goal Request:

**Request Type**: POST
**URL**: `http://localhost:5000/api/goals`
**Headers**:
- Key: Content-Type
  Value: application/json
- Key: Authorization
  Value: Bearer JWT-Token (Replace `JWT-Token` with the actual JWT obtained during registration or login)
**Body** (raw JSON):
```json
{
  "text": "Learn a new language"
}
```
Click the "Send" button to add a new goal. You should receive a response with the created goal.

### 4. Delete Goal Request:

**Request Type**: DELETE
**URL**: `http://localhost:5000/api/goals/goal-id` (Replace `goal-id` with the actual ID of the goal you want to delete)
**Headers**:
- Key: Authorization
  Value: Bearer JWT-Token (Replace `JWT-Token` with the actual JWT obtained during registration or login)

Click the "Send" button to delete the specified goal. You should receive a response indicating the deleted goal's ID.

### 5. Update a Goal:

1. Create a new request and choose the appropriate HTTP method (PUT) for updating a goal.

2. Set the URL to the endpoint where you want to update a goal. For example:
   - URL: `http://localhost:5000/api/goals/goal-id`
   - Replace `localhost:5000` with your API's domain or IP address.
   - Replace `goal-id` with the actual ID of the goal you want to update.

3. Add the necessary headers:
   - Key: Content-Type
   - Value: application/json
   - Key: Authorization
   - Value: Bearer JWT-Token
     - Replace `JWT-Token` with the actual JWT obtained during registration or login.

4. In the request body, specify the updates you want to make to the goal in JSON format. For example:
   ```json
   {
     "text": "Updated goal text"
   }
   ```

6. Click the "Send" button to send the request.

7. You should receive a response indicating that the goal has been successfully updated. The response may contain the updated goal object.

### 6. List Goals:

1. Create a new request and choose the appropriate HTTP method (GET) for listing goals.

2. Set the URL to the endpoint where you want to list goals. For example:
   - URL: `http://localhost:5000/api/goals`

3. Add the necessary headers:
   - Key: Authorization
   - Value: Bearer JWT-Token
     - Replace `JWT-Token` with the actual JWT obtained during registration or login.

4. Click the "Send" button to send the request.

5. You should receive a response containing a list of goals associated with the authenticated user. The response will typically be in JSON format and may look like an array of goal objects.

### 7. Log out

In a real-world scenario, logging out usually involves removing the JWT token from the client-side (e.g., browser or mobile app) and possibly revoking the token on the server-side. Since Postman doesn't manage tokens like a client-side application does, you can simulate a "logout" by simply clearing the token in Postman.

**Clear the Token in Postman**:

   - Open Postman.

   - If you have an existing request that includes the JWT token in the headers, open that request.

   - In the request, click on the Headers section where the token is defined.

   - Remove the `Authorization` header or replace the token value with an invalid token (e.g., set it to an empty string or some random text).

   - Send the request again.

   - Since the token is no longer valid or present, the server will likely respond with a 401 (Unauthorized) status code or some other error response indicating that the request is not authenticated.

   This step effectively simulates a "logout" by sending an unauthorized request to the server.

