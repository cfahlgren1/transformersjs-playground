import PillLink from '@/components/PillLink';

export default function Home() {
  return (
    <div className="mx-auto p-4 text-center">
      <PillLink text="Transformers.js" link="https://www.npmjs.com/package/@xenova/transformers" newText='Powered by' />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
        Playground
      </h1>
      <p className="font-bold text-slate-700 mt-4 font-mono italic text-md">
        The fastest way to get started with Transformers.js.
      </p>
    </div>
  );
}
