// import { FormEvent, useState } from 'react';
import { useParams } from 'react-router';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

// import { database } from '../services/firebase';
// import { ref, push} from "firebase/database";

import '../styles/room.css';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  // const [newQuestion, setNewQuestion] = useState('');
  const params = useParams() as RoomParams;
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  
  // async function handleSendQuestion(event: FormEvent) {
  //   event.preventDefault();

  //   if (newQuestion.trim() === '') {
  //     return;
  //   }

  //   if (!user) {
  //     throw new Error('You must be logged in');
  //   }

  //   const question = {
  //     content: newQuestion,
  //     author : {
  //       name: user.name,
  //       avatar: user.avatar,
  //     },
  //     isHighLighted: false,
  //     isAnswered: false
  //   };

  //   const roomRef = ref(database,`rooms/${roomId}/questions`);
  //   await push(roomRef, { ...question })

  //   setNewQuestion('');
  // }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map( question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}