import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_logs(run_id):
    # Placeholder: Replace with actual GitHub API call to fetch logs
    return "Sample error: npm run build failed due to missing script."

def analyze_logs(logs):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a DevOps assistant."},
            {"role": "user", "content": f"Analyze this CI/CD log and suggest a fix:\n{logs}"}
        ]
    )
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    run_id = os.getenv("RUN_ID", "12345")
    logs = get_logs(run_id)
    suggestion = analyze_logs(logs)
    print("🔍 Suggested Fix:\n", suggestion)
