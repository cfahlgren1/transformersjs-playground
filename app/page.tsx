"use client"
import PillLink from '@/components/PillLink';
import CategoryRow from '@/components/CategoryRow';
import { categories } from "@/lib/categories";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <PillLink text="Transformers.js" link="https://www.npmjs.com/package/@huggingface/transformers" newText='Powered by' />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
        Playground
      </h1>
      <p className="font-bold text-slate-700 font-mono italic text-lg mb-10">
        The fastest way to get started with Transformers.js.
      </p>
      <div className="mt-24">
        <CategoryRow categories={categories} />
      </div>
    </div>
  );
}