"use client";
import { userId, userName } from "./ChatForum";

//const userToken='ygk6wqamp4ncjtjh3gekv9ft54v4qd9qgemm2qncchtxy82833udgjwr276jk5eq';
export const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
  alt: `${userName}'s profile picture`,
};
