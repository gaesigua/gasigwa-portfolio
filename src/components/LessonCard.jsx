import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// We are assuming the component receives a 'lesson' object as a prop
const LessonCard = ({ lesson }) => {
  return (
    <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
      <img src={lesson.logo} alt={`${lesson.title} Logo`} className="h-20 w-20 mx-auto mb-4 object-contain" />
      <h3 className='text-2xl font-semibold text-neutral-50 mb-3 text-center'>{lesson.title}</h3>
      <p className='text-neutral-400 mb-4 flex-grow'>
        {lesson.summary}
      </p>
      <div className='mt-auto flex justify-between items-center text-neutral-400'>
        <span className='text-sm'>{lesson.tags}</span>
        <Link to={`/lessons/${lesson.slug}`} className='text-blue-300 hover:text-blue-300 hover:underline flex items-center'>
          Start Lesson <ArrowRight className='ml-1 w-4 h-4' />
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
