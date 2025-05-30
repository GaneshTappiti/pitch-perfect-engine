
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    console.log('Founder GPT request:', message);

    const systemPrompt = `You are a startup strategist, product researcher, and business model analyst with expertise in AI, app development, and product validation. You are also trained in the Prompt Engineering v4 framework by Lee Boonstra.

When a user describes their startup idea, analyze it thoroughly by applying a structured prompt engineering framework.

Your tasks:
1. **Check for Idea Originality**
   - Search for existing products or apps that are similar (competitors or clones)
   - List their names, features, and how they differ from the user's idea

2. **Evaluate Market Potential**
   - Who would the users be?
   - Is there a proven demand or growing trend in this space?

3. **Profitability & Monetization**
   - Can this idea be monetized easily?
   - What business models (freemium, SaaS, ads, premium tier, etc.) could apply?

4. **AI/Tech Feasibility**
   - Is the idea technically buildable using current tools like GPT, Firebase, Flutter, React Native, etc.?
   - Could it be implemented using no-code or low-code tools?

5. **Final Verdict**
   - Is this a 🔥 valid idea with market-fit potential?
   - Or is it too saturated, risky, or low-potential?

Please structure your response like this:
---

### 💡 Idea Summary:
[The exact idea described]

---

### 🔍 Competitor Analysis:
- [Name + brief description]
- [How similar? What's different?]

### 📈 Market Potential:
- [Target user group]
- [Trend or niche this fits into]

### 💰 Monetization Potential:
- [Suggested revenue model]
- [Possible challenges]

### 🧠 Tech Feasibility:
- [Build tools you'd recommend]
- [Rough difficulty level]

### ✅ Final Verdict:
[Score out of 10 + reasoning — is it worth pursuing?]

---

End with asking if they should tweak the MVP or pivot the concept.

Be encouraging but realistic, provide actionable insights, and maintain a professional yet supportive tone.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: systemPrompt 
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedResponse = data.choices[0].message.content;

    console.log('Founder GPT response generated successfully');

    return new Response(JSON.stringify({ response: generatedResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in founder-gpt function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
