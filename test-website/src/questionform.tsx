import React, { useState } from 'react';

interface QuestionFormProps {
    onSubmit?: (question: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;
        setSubmitting(true);
        setMessage(null);

        try {
            const res = await fetch('http://localhost:5000/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: question.trim(), name: name.trim() || undefined, email: email.trim() || undefined }),
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err?.error || 'Fehler beim Senden');
            }
            const data = await res.json();
            setMessage('Frage erfolgreich gesendet. Danke!');
            onSubmit?.(question);
            setQuestion('');
            setName('');
            setEmail('');
        } catch (err: any) {
            setMessage(err?.message || 'Netzwerkfehler');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name (optional)"
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional)"
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
            />
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
                disabled={!question.trim() || submitting}
                style={{
                    padding: '10px 20px',
                    backgroundColor: question.trim() ? '#7b4040ff' : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: question.trim() && !submitting ? 'pointer' : 'not-allowed',
                    fontSize: '20px',
                }}
            >
                {submitting ? 'Sende...' : 'Send Question'}
            </button>
            {message && (
                <div style={{ marginTop: '6px', color: message.includes('erfolgreich') ? 'green' : 'red' }}>{message}</div>
            )}
        </form>
    );
};

export default QuestionForm;