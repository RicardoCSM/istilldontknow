"use client"

import * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton, SidebarRail } from "./ui/sidebar"
import { NavUser } from "./nav-user"
import type { Session } from "next-auth"
import Link from "next/link"
import { GalleryVerticalEndIcon, LogIn } from "lucide-react"

export function AppSidebar({ session, ...props }: React.ComponentProps<typeof Sidebar> & { session: Session | null }) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <GalleryVerticalEndIcon className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                        Acme Inc.
                        </span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
            </SidebarContent>
            <SidebarFooter>
                {session?.user ? (
                    <NavUser user={session.user} />
                ) : (
                    <SidebarMenuButton size="lg" asChild>
                        <Link href="/signin">
                            <LogIn />
                            Sign in
                        </Link>
                    </SidebarMenuButton>
                )}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
