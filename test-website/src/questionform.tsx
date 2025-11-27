import React, { useState } from 'react';

interface QuestionFormProps {
    onSubmit?: (question: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit?.(question);
            setQuestion('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                rows={10}
                style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontFamily: 'inherit',
                    fontSize: '20px',
                }}
            />
            <button
                type="submit"
                disabled={!question.trim()}
                style={{
                    padding: '10px 20px',
                    backgroundColor: question.trim() ? '#7b4040ff' : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: question.trim() ? 'pointer' : 'not-allowed',
                    fontSize: '20px',
                }}
            >
                Send Question
            </button>
        </form>
    );
};

export default QuestionForm;