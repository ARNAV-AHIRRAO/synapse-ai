import google.generativeai as genai

from app.config.config import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(system_prompt: str, user_prompt: str):

    prompt = f"""
SYSTEM:
{system_prompt}

USER:
{user_prompt}
"""

    response = model.generate_content(prompt)

    return response.text