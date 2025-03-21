import {StreamChat} from "stream-chat";
const api_key ="7wc33bxd6xa4";
const api_secret="ygk6wqamp4ncjtjh3gekv9ft54v4qd9qgemm2qncchtxy82833udgjwr276jk5eq";
const user_id="user_2tS97b5kmg30IPxidjtoLvNxRnp";
export async function POST(request) {

  const serverClient = StreamChat.getInstance(api_key,api_secret);
  const user=await request.json()

  const token = serverClient.createToken(user_id);
  console.log(token);
  
  // const chatClient = StreamChat.getInstance("{{ api_key }}",{
  //   timeout:6000
  // });
  // chatClient.setUser({
    return Response.json({ message: 'Hello World' })
  }


  