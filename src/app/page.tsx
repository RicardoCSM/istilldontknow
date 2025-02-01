import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import { ModeToggle } from "./_components/theme-toggle";
import { Button } from "./_components/ui/button";
import { GithubIcon } from "lucide-react";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <nav className="container flex h-14 items-center justify-end gap-2">
        <ModeToggle />
        <Button
          asChild
          variant="ghost"
          className="h-9 w-9 fill-current px-0 py-2"
        >
          <a href="https://github.com/zeevo/t3-shadcn-ui">
            <GithubIcon className="h-4 w-4" />
          </a>
        </Button>
      </nav>
      <div className="flex flex-1 flex-col items-center gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          t3-shadcn-ui
        </h1>
        <div className="flex w-full max-w-lg flex-col gap-2 rounded border p-2">
          <p className="text-2xl">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <p className="text-center text-2xl">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
        </div>

        <div className="flex gap-2">

        </div>
      </div>
    </main>
  );
}
