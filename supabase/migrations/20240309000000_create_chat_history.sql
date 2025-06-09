-- Create chat_history table
CREATE TABLE IF NOT EXISTS chat_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'model')),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS chat_history_session_id_idx ON chat_history(session_id);
CREATE INDEX IF NOT EXISTS chat_history_created_at_idx ON chat_history(created_at);

-- Add RLS policies
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON chat_history
    FOR SELECT
    USING (true);

CREATE POLICY "Enable insert access for all users" ON chat_history
    FOR INSERT
    WITH CHECK (true); 