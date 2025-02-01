import { auth } from "~/server/auth";
import { ModeToggle } from "./_components/theme-toggle";
import { Button } from "./_components/ui/button";
import { GithubIcon } from "lucide-react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./_components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { Separator } from "./_components/ui/separator";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>
        <header className="flex justify-between border-b bg-background  w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="flex items-center gap-2 px-4">
            <ModeToggle />
            <Button
              asChild
              variant="ghost"
              className="h-9 w-9 fill-current px-0 py-2"
            >
              <Link href="https://github.com/RicardoCSM">
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
