import openai
import os

# Set up your OpenAI API key

os.environ["OPENAI_API_KEY"] = "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"
openai.api_key = os.environ["OPENAI_API_KEY"]
model_engine = "text-davinci-003"


def ask_chat(prompt):
    response = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    message = response.choices[0].text
    return message.strip()


print("Welcome to the chatbot! Type 'bye', 'goodbye', 'exit', or 'quit' to end the conversation.")

while True:
    user_input = input("> ")
    if user_input.lower() in ["bye", "goodbye", "exit", "quit"]:
        print("Goodbye!")
        break
    prompt = f"You: {user_input}\nChatGPT:"
    response = ask_chat(prompt)
    print(response)