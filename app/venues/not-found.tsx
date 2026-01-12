// app/venues/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Venue Not Found</h1>
        <p className="text-stone-300 mb-8">The venue you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="inline-block rounded-full bg-amber-500 px-6 py-3 font-bold text-black hover:scale-105 transition-transform"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}