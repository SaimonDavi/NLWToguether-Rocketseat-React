import { useState, useEffect} from 'react';
import { database } from '../services/firebase';
import { ref, onValue} from "firebase/database";

type QuestionType = {
  id: string,
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
}

type FirebaseQuestions = Record<string, {
  id: string;  
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
}>

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');  

  useEffect(() => {
    const roomRef = ref(database,`rooms/${roomId}`);

    onValue(roomRef,(room) => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
      
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => { 
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
        } 
      })
      
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
      // console.log(room.val().title);
    }) 
  }, [roomId]);

  return{ questions, title }
}