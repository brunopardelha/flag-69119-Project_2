For the application to work is necessary to provide the following information in the .env file:

PORT 
#port (number) for the aplication/server to run

MONGODB_URL 
#connection (string) to MongoDB with username, password, project, database name
example: MONGODB_URL=mongodb+srv://<username>:<password>@<project>/<database name>?retryWrites=true&w=majority

SESSION_SECRET
#(string) to verify authenticity of session
