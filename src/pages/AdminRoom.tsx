import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

import { useRoom } from '../hooks/useRoom';

import { database } from '../services/firebase';
import { ref, remove, update} from "firebase/database";

import '../styles/room.css';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const navigate = useNavigate();
  const params = useParams() as RoomParams;
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    // const endedAt = new Date();
    await update(ref(database,`rooms/${roomId}`), { endedAt: new Date(), });
    navigate('/');
  }

  async function handleDeleteQuestion(questionId : string) {
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      // const questionRef = ref(database,`rooms/${roomId}/questions/${questionId}`);
      // await remove(questionRef);
      await remove(ref(database,`rooms/${roomId}/questions/${questionId}`));
    }
  }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
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
              >            
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}