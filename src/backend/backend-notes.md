## Step by step

### In my mind I need to think about 4 big tasts I need to achieve

1. Server
2. Database
3. Authentication
4. API Routes

---

1. Server
   To create a seriver I need it to run on a allocated port with feedback from console.
   A reminder here express() will be activated eventho it is under a variable that hasnt been called.

```
import express from "express";

const app = express();


app.use(json());
app.listen(5000, ()= {console.log("Servier is running on PORT 5000")})


```

2. Database
   Once the server is running I need to think about the Datebase I am using in this case mongoose.
   Depends on the library that I am using, I need to have a code that I can testing on with connection

```

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.error(err))

```
