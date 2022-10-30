import app from "./app";
import 'dotenv/config'

const port = process.env.PORT || 5100
app.listen(port)