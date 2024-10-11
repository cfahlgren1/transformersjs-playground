---
title: Transformers.js Playground
emoji: 🛝
colorFrom: indigo
colorTo: purple
sdk: docker
pinned: true
app_port: 3000
---
# Transformers.js Playground


![Transformers.js Playground](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/webllm/shot.png?)

## Contributing

Adding a demo is pretty straightforward. You can take a look at this [PR](https://github.com/cfahlgren1/transformersjs-playground/pull/1) as an example.

## Example of Adding Page to Playground

### Steps

#### 1. Add Route
Add the page where the demo will go under the category it belongs in. You can create hooks, components, and types as needed.

**Example**
```
app
└── category
    └── [slug]
        └── generate-text
            └── llama-3.2
                └── page.tsx
```
<img width="1683" alt="image" src="https://github.com/user-attachments/assets/1903e56a-5ecd-4587-a382-579cfcc72763">

#### 2. Add demo to `categories.tsx`, this will allow it to show up on Categories Page
<img width="1657" alt="image" src="https://github.com/user-attachments/assets/1f1680af-9d9b-45b2-84a5-658b750fe020">

```ts
  {
    title: "Generate Text",
    slug: "generate-text",
    icon: Type,
    description: "Llama. Qwen. Enough said.",
    status: "Available",
    colorName: "blue",
    graphic: TextGenerationIcon,
    demos: [
      {
        title: "Llama 3.2",
        slug: "llama-3.2",
        component: Llama32Page,
        description: "Llama 3.2 in the browser. WebGPU FTW."
      }
    ]
  }
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
