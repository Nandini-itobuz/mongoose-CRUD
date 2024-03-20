import mongoose from "mongoose";
export async function connectDb  () {
    return mongoose.connect('mongodb://localhost:27017')
        .then(() => {
            mongoose.connection.on('error', (error) => {
                console.error('MongoDB connection error:', error);
                process.exit(1);
            });

            mongoose.connection.once('open', () => {
                console.log('Connected to MongoDB');
            });
        })
        .catch(error => {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);
        });
}