<a href="https://culinary-craft.vercel.app/">
    <h1>🍽️ CulinaryCraft</h1>
</a>
<p >
  A culinary AI that can help you with your cooking.
</p>
<p >
  <a href="#description"><strong>Description</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
</p>
<!-- <br/> -->

## Description

<h3>KJ Somaiya CODEICON 4.0 Runner Up Project (Updated)</h3>

CulinaryCraft is a sophisticated recipe generation and management web app that leverages llms to curate extensive and diverse culinary creations. With an intuitive user interface, it offers users to generate custom recipes with ingredient substitution suggestions, and nutrition-specific recommendations.

**Link:** [https://culinary-craft.vercel.app/](https://culinary-craft.vercel.app/)
<img width="1392" alt="Screenshot 2023-08-06 at 3 47 28 PM" src="https://github.com/korebhaumik/CulinaryCraft/assets/106856064/d931a256-cc47-4740-ba66-596965c49916">



## Features

- [Next.js](https://nextjs.org/) App Router
- React and [Typescript](https://www.typescriptlang.org/) for reliable and fast development
- [Langchain.js](https://docs.langchain.com/docs/) as the wrapper to interact with OpenAI API
- User Interface and Experience
  - Design is built from scratch using [Figma](https://www.figma.com/)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Icons from [Heroicons](https://heroicons.com) and [Google Icons](https://fonts.google.com/icons)

## Running locally

You will need to have the necessary environment variables setup in your `.env` file.
This should include a key for your openai account. 
    
```bash
NEXT_PUBLIC_OPENAI_API_KEY = 
```

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to access your openai credits.

1. Install run: `pnpm i`
2. Make a new `.env` file.
3. Populate the `.env` file with the necessary environment variables.

```bash
pnpm run dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Running locally with docker

```bash
docker login
docker pull korebhaumik/culinary-craft.
docker run -env-file .env -p 3000:3000 korebhaumik/culinary-craft
```

> Note: If the docker image is not available (repo is private), you can build it locally by running `docker build -t culinary-craft.` in the root directory of the project.
