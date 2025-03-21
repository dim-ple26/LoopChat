'use client'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = '7wc33bxd6xa4';
const userId = 'user_2tS97b5kmg30IPxidjtoLvNxRnp';
const userName = 'DIMPLE';
//const userToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYnJva2VuLXNhbGFkLTMiLCJleHAiOjE3NDA0MzMxMjB9.uIHGtpGCoaPd-uRp7au5EtGMS3PjGM--kwu2sjoNx9I';

const userToken='ygk6wqamp4ncjtjh3gekv9ft54v4qd9qgemm2qncchtxy82833udgjwr276jk5eq';
console.log('userToken:', userToken);
const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
  alt:`${userName}'s profile picture`,
};

export default function ChatForum({slug}) {

  function toTitleCase(str){
    return str.replace(
      /\b[a-z]/g,
      (char)=> char.toUpperCase()
    );
  }


  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      alt: `${slug} logo`,
      name: toTitleCase(slug.replace(/-/g,"")) + ' Discussion',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

//export default App;