// En este código, primero definimos la interfaz IPost para especificar la estructura del documento de "Post".

// Luego, verificamos si mongoose.models.Post ya existe. Si existe, asignamos ese modelo existente a la variable Post. De lo contrario, utilizamos mongoose.model para compilar y asignar el nuevo modelo a la variable Post.

// Al final, exportamos el modelo Post.

// Con esta solución, puedes evitar el error de sobrescribir el modelo y asegurarte de que el modelo de "Post" se compile correctamente sin la necesidad de comprobar manualmente si ya está definido en diferentes partes de tu aplicación.


import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
  title: string;
  description: string;
  link: string;
  username: string;
  avatar:string
  createdAt: Date;
  updatedAt: Date;

}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;