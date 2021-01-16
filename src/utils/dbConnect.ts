import mongoose, { Mongoose } from 'mongoose'

export const dbConnect = async (): Promise<Mongoose | 0> => {
  if (mongoose.connection.readyState >= 1) {
    return 0
  }

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}
