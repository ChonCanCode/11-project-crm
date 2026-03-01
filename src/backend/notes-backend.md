## Step by step

### In my mind I need to think about 4 big tasts I need to achieve

1. Server (Infrastructure)
2. Database (Infrastructure)
3. Models ( Data Layer)
4. Authetication System
   - Registration
   - Login
   - Token generation
   - Password hashing
   - Route protection
5. Application Features (Properties, etc)

---

1. **Server**

   To create a seriver I need it to run on a allocated port with feedback from console.
   A reminder here express() will be activated eventho it is under a variable that hasnt been called.

   Also in here `app.use()` will trigger library that will be used in this case `cors()` and `json()`. Acting as an interceptor to Modify and allow them to continue.

   ```
   import express from "express";
   import cors from "cors";

   const app = express();

   app.use(express.json());
   app.use(cors())

   app.listen(5000, () => {console.log("Servier is running on PORT 5000")})


   ```

2. **Database**

   Once the server is running I need to think about the Datebase I am using in this case mongoose.
   Depends on the library that I am using, I need to have a code that I can testing on with connection

   ```

   mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error(err))

   ```

3. **Models (Data layer)**

   At this point I need to think about the format of the data will be stored and extract from the database.

   Models meaning:
   - Structure of data
   - Validation rules
   - Default values
   - Constraints
   - Relationships

     ```
     js

     const userSchema = new mongoose.Schema({
        email: String,
        password: String,
        role: {type: String, default"user"}
     })

     ```

     ^This defines:
     - What a user looks like
     - What fields are allowed
     - What type each field is
     - Default behaviour
