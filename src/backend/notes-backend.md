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
   In here I need to thinkg about what data I need to store.
   - User - Email login, password, role
   - Properties - Address, tenant, rent & status
   - Authentication - login, registration
   - Data storage
   - API acccess

   User:

   ```
   js

   const userSchema = new mongoose.Schema({
      email: String,
      password: String,
      role: {type: String, default"user"}
   })

   const User = mongoose.model("User", userSchema);

   ```

   ^This defines:
   - What a user looks like
   - What fields are allowed
   - What type each field is
   - Default behaviour

   Properties:

   ```
   const propertySchema = new mongoose.Schema({
      street: String,
      city: String,
      postcode: String,
      tenant: String,
      rent: Number,
      status: String,
   })

   const Property = mongoose.model("Property", propertySchema);
   ```

Authentication:

- Registration

  ```
   app.post("api/auth/register", async (req, res) => {
      try {
            const hashPassword = await bcrypt.hash(req.body.password, 10);

            const user = new User ({
               email: req.body.email,
               password: hashPassword,
         })

         await user.safe();
         res.status(201).send("User registered");
      } catch (err) {
         res.status(500).json({error: err.message})
      }
   })
  ```

- Hash password

  ```
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  ```

- Login

  ```
   app.post("/api/auth/login", async(req, res) => {
      try {
         const user = await User.findOne({ email: req.body.email});
         if (!user) return res.status(401).send("Invalid credentials");

         const valid = await bcrypt.compare(req.body.password, user.password);
         if (!valid) return res.status(401).send("Invalid credentials");

         const token = jwt.sign({ id:user_id}, process.env.JWT_SECRET);

         res.json({ token });
      } catch (err) {
         res.status(500).json({ err: err.message });
      }
   });
  ```

- Token generation
  - Token register`jwt.sign()`
  - Putting a signatuire of where the token is coming from `process.env.JWT_SECRET`

  ```
  const token = jwt.sign ({id:user_id}, process.env.JWT_SECRET);
  ```

- Route protection

```
app.post("api/auth/login", async(req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email})
      if (!user) return res.status(401).send("Invalid credentials");

      const valid = await bcrypt.compare(req.body.password, user.password);
      if (!valid) = return res.status(401).send("Invalid credentials");

      const token = jwt.sign({id:user_id}, process.env.JWT_SECRET);

      res.json({token});

   } catch (err){
      res.status(500),json({error:err.message})
   }
})
```
