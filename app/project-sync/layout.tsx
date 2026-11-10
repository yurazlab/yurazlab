export default function ProjectSyncLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-svh w-full max-w-3xl px-5 py-10 text-zinc-200 sm:px-8 sm:py-16">
      {children}
    </main>
  );
}
