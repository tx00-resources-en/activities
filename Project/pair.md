# About Pair programming 

## Driver vs Navigator

**Driver:**
- The driver is responsible for actively writing code. They have control of the keyboard and are the ones physically typing out the code.
- The driver should focus on translating the instructions or guidance provided by the navigator into actual code.
- While coding, the driver should think critically about what they're typing and ask questions if they need clarification or assistance.
- The driver should also take care to maintain good coding practices, such as formatting code properly, writing meaningful variable and function names, and following coding conventions.

**Navigator:**
- The navigator takes on a more strategic role. They are responsible for observing the code being written by the driver and providing guidance and suggestions.
- The navigator should think about the bigger picture, such as the overall project structure, potential issues, and how different components fit together.
- The navigator can help catch errors or suggest alternative approaches while the code is being written.
- The navigator should communicate clearly with the driver, explaining their thought process and reasoning.

**When to Change Roles:**
- It's common to switch roles every 25 minutes or after completing a specific task or milestone. However, feel free to adjust the timing based on the complexity of the task.
- Changing roles is essential to ensure both participants actively engage and share their knowledge.
- When switching roles, make sure to discuss what you've accomplished and what needs to be done next.

**Using Your Imagination:**
- In addition to the core tasks of this lab, use your creativity to enhance the project. Consider adding npm scripts for tasks like starting the server.
- Collaborate and brainstorm ideas together, and decide which features to implement in your pair programming sessions.

Here's an example of how to structure your pair programming session:

1. **Driver (Session 1):** Start by setting up the project, configuring the Express.js server, and implementing user registration.

2. **Navigator (Session 1):** Observe the code being written by the driver, provide guidance on folder structure, and think about how user authentication will fit into the application.

3. **Driver (Session 2):** Continue by implementing user login and JWT token generation.

4. **Navigator (Session 2):** Observe the authentication code, think about security best practices, and plan for creating and managing todo lists.

5. **Switch Roles:** Discuss what you've accomplished so far and what's next. The driver becomes the navigator, and vice versa.

6. **Continue Switching Roles:** Keep switching roles periodically as you work through the lab.

By following this approach, you'll both actively contribute to the project's development, learn from each other, and build a well-structured Todo List application with authentication.

## How to collaborate

**Step 1:** 
- One of you creates a GitHub Repository
- Add your pair programming partner as a collaborator. 

**Step 2:**

- Your pair programming partner should accept the invitation.

**Step 3: Clone the GitHub Repository**

Both you and your pair programming partner need to clone the GitHub repository to your local machines. Follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to clone the repository using the `cd` command.

3. Use the `git clone` command to clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

Replace the URL with the one you copied earlier.

**Step 4: Work on the Code**

Now that you both have cloned the repository, you can start working on the code.

1. Make your changes in your local repository.

2. After making changes, save your files.

**Step 5: Push Your Changes**

When you want to share your code changes with your partner or update the remote repository on GitHub, you need to use the `push` command.

1. In your terminal, navigate to the repository directory.

2. Use the following commands to commit your changes and push them to GitHub:

```bash
git add .
git commit -m "Describe your changes here"
git push origin main
```

Replace `main` with the name of the branch you're working on if it's not the main branch.

**Step 6: Pull Your Partner's Changes**

To get the latest code changes from your partner, use the `pull` command.

1. In your terminal, navigate to the repository directory.

2. Run the following command to pull your partner's changes:

```bash
git pull origin main
```

Again, replace `main` with the appropriate branch name if necessary.

**Step 7: Repeat**

Continue working, making changes, and pushing and pulling as needed. Remember to communicate with your partner to avoid conflicts and ensure smooth collaboration.
