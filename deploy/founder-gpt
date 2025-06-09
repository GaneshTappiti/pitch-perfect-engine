import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from 'https://esm.sh/@google/generative-ai@0.1.3'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Initialize Google Generative AI with the API key
const genAI = new GoogleGenerativeAI('AIzaSyD90kAEXKQ01d11z9khAfgHk4qbOuretUQ')

// Initialize Supabase client
const supabaseUrl = 'https://dsfikceaftssoaazhvwv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZmlrY2VhZnRzc29hYXpodnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTM2NzYsImV4cCI6MjA2NDE4OTY3Nn0.TVtwI2INheLjdnwnaZNM0tLuz9URmGZ4MHbH2Akb3fA'
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, sessionId } = await req.json()

    if (!message) {
      throw new Error('Message is required')
    }

    // Get the model with safety settings
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-pro',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    })

    // Get chat history from database if sessionId is provided
    let chatHistory = []
    if (sessionId) {
      const { data: history, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching chat history:', error)
      } else if (history) {
        chatHistory = history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        }))
      }
    }

    // Initialize chat with history
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are a startup mentor, therapist, co-founder, and investor rolled into one. Your goal is to help founders validate their ideas, provide strategic advice, and guide them through their startup journey. Be direct, honest, and actionable in your responses.' }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I will act as a startup mentor, therapist, co-founder, and investor, providing direct, honest, and actionable advice to help founders validate their ideas and navigate their startup journey.' }],
        },
        ...chatHistory
      ],
    })

    const result = await chat.sendMessage(message)
    const response = result.response.text()

    if (!response) {
      throw new Error('No response from Gemini')
    }

    // Store the conversation in the database
    if (sessionId) {
      const { error: userError } = await supabase
        .from('chat_history')
        .insert([
          { session_id: sessionId, role: 'user', content: message },
          { session_id: sessionId, role: 'model', content: response }
        ])

      if (userError) {
        console.error('Error storing chat history:', userError)
      }
    }

    return new Response(
      JSON.stringify({ response }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error.message)
    
    // Handle specific Gemini API errors
    let errorMessage = error.message
    if (error.message.includes('API key')) {
      errorMessage = 'Invalid API key. Please check your configuration.'
    } else if (error.message.includes('quota')) {
      errorMessage = 'API quota exceeded. Please try again later.'
    } else if (error.message.includes('safety')) {
      errorMessage = 'The request was blocked due to safety concerns.'
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
}) 