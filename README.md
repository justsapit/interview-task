# JUST SAP IT! Interview Task

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`, and edited to fit in line with our own project starter.

## What's next? How do I make an app with this?

We’ve kept the scaffolding minimal to help you focus on building features.

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [tRPC](https://trpc.io)

## Environment

You will require the following tools to be installed on your system:

- [Node.js](https://nodejs.org)
- [Bun](https://bun.sh)
- [Docker](https://www.docker.com)

## Tasks
### 1. Setup
1. Create a `private repository` under your GitHub account using this repository as a template.
2. Clone the repository on your local machine.
3. Create a `feature branch` (e.g., `feat/todo`) to complete the tasks.
4. Install the dependencies by running `bun install`
5. Setup a Postgres database using [Docker](https://www.docker.com)

### 2. Database Configuration
6. Connect the database to the project by editing the `DATABASE_URL` environment variable in the [.env](.env) file
7. Run the development server by running `bun dev`. You should be able to see the app running on [http://localhost:3000](http://localhost:3000)
8. We are going to store todos in the database. Edit the `todo` table in the [src/db/schemas/todo.ts](src/db/schemas/todo.ts) file to include the following fields:
   - `id` (auto-generated)
   - `text` (string)
   - `completed` (boolean)
9. Sync the database schema by running `bun run push`
10. Ensure the database schema was successfully synced by connecting to the database and checking if the `todo` table was created.

### 3. Backend: tRPC API Endpoints
11. Create a new tRPC endpoint in [src/trpc/routers/todo-router.ts](src/trpc/routers/todo-router.ts) to fetch all todos from the database. You can use the `db` helper function to query the database. The endpoint should return an array of todos.
12. Create a new tRPC endpoint to create a new todo in the database. The endpoint should accept a `text` field and return the newly created todo.
13. Create a new tRPC endpoint to update a todo in the database. The endpoint should accept an `id` and a `completed` field and return the updated todo.
14. Create a new tRPC endpoint to delete a todo from the database. The endpoint should accept an `id` and return the deleted todo.

### 4. Frontend: Pages & UI Interactions
15. Create an element on the main page of the Next.js app that navigates the user to the `/todos` page.
16. Create a new page in the Next.js app to display all todos, under `/todos`. 
17. Create a form in the page to create a new todo. 
18. Create a button in each todo to mark it as completed.
19. Create a button in each todo to delete it. 

- **Tip** You can use the `useQuery` and `useMutation` hooks from TanStack Query and tRPC's TanStack React Query integration to fetch, create, update and delete the todo(s).

### 5. Styling, UX & Production
20. Ensure the app is responsive and looks good on desktop and mobile devices, following user experience best practices and accessibility — [WebAIM Checklist](https://webaim.org/resources/designers/#checklist) is a good starting point.
    - If you need help styling the components, feel free to use a component library like [shadcn/ui](https://ui.shadcn.com/). Otherwise, you can use the Tailwind CSS utility classes directly.
21. Ensure the app builds and runs correctly in production mode by running `bun run build` and then `bun run start`.

### 6. ⭐ Extra Credit (Optional)
22. Make a `Dockerfile` and a `docker-compose.yml` file to run the app and the database together using Docker, so that the app can be easily deployed to any environment.

### 7. Wrap-up
23. Open a `pull request` in your private repository from your feature branch to `main`. Ensure to include a description of the changes you made and any additional information you think is relevant. You can also include screenshots or videos of the app running.

## Submission

1. Add us as collaborators to your private repository for review:
   - [itsyoboieltr](https://github.com/itsyoboieltr)
   - [Attk4](https://github.com/Attk4)
2. Share the link to your private repository with us once your work is ready for review.
3. We will schedule a meeting to review your work and discuss the decisions you made while working on the task. 

You have `1 week` to complete the task. If you need more time, please reach out to us to request an extension, we are happy to accommodate.

## What We're Looking For

We will be evaluating your work based on:

- Code quality and structure
- Understanding of Next.js, React, tRPC and Postgres
- UI/UX design (including responsiveness and accessibility)
- Git commit practices and pull request hygiene
