import os
import subprocess
import shutil
import argparse
import webbrowser

def execute_commands(repo_url):
    print("Starting the process...")

    # Step 1: Clone the repository
    print("Cloning the repository...")
    repo_name = repo_url.split('/')[-1].replace('.git', '')
    subprocess.run(['git', 'clone', repo_url], check=True)
    print(f"Repository cloned into folder: {repo_name}")

    # Step 2: Locate the newly cloned repo folder
    repo_folder = os.path.join(os.getcwd(), repo_name)
    data_folder = os.path.join(repo_folder, 'public', 'data')

    # Ensure public/data folder exists
    os.makedirs(data_folder, exist_ok=True)
    print(f"Ensured existence of folder: {data_folder}")

    # Step 3: Copy homepage.json to the public/data folder
    source_file = os.path.join(os.getcwd(), 'homepage.json')
    destination_file = os.path.join(data_folder, 'homepage.json')
    if os.path.exists(source_file):
        print("Copying homepage.json...")
        shutil.copy(source_file, destination_file)
        print("File copied successfully.")
    else:
        print("Warning: homepage.json does not exist. Skipping file copy.")

    # Step 4: Run npm install and npm run dev inside the repo folder
    print("Installing dependencies...")
    subprocess.run(['npm', 'install'], cwd=repo_folder, check=True)
    print("Dependencies installed successfully.")

    print("Starting development server...")
    subprocess.run(['npm', 'run', 'dev'], cwd=repo_folder, check=True)
    print("Development server started.")

    # Step 5: Open localhost:3000 in the default web browser
    print("Opening localhost:3000 in the web browser...")
    webbrowser.open('http://localhost:3000')
    print("Opened localhost:3000.")

def main():
    parser = argparse.ArgumentParser(description='Clone a repository, set up and run a Next.js project.')
    parser.add_argument('repo_url', type=str, help='The URL of the repository to clone.')
    args = parser.parse_args()

    execute_commands(args.repo_url)

if __name__ == '__main__':
    main()
