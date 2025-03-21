
import ChatForum from '@/components/ChatForum';




export default async function Page({ params }) {
  // const client = useCreateChatClient({
  //   apiKey,
  //   tokenOrProvider: userToken,
  //   userData: { id: userId },
  // });

    const slug = (await params).slug
    return <ChatForum slug={slug}/>
  }