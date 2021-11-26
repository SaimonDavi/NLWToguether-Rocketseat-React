import { ReactNode } from 'react';

import './style.css';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question ({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children,
}: QuestionProps) {
  return (
    <div className={`question ${ isAnswered ? 'answered' : ''} 
                              ${ isHighLighted && !isAnswered  ? 'highLighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span className={`${ isAnswered ? 'answeredSpan' : ''} 
                            ${ isHighLighted && !isAnswered ? 'highLightedSpan' : ''}`}>
            {author.name}
          </span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}