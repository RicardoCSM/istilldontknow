"use client"

import * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "./ui/sidebar"
import { NavUser } from "./nav-user"
import { Button } from "./ui/button"
import type { Session } from "next-auth"
import Link from "next/link"

export function AppSidebar({ session, ...props }: React.ComponentProps<typeof Sidebar> & { session: Session | null }) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>

            </SidebarHeader>
            <SidebarContent>
            </SidebarContent>
            <SidebarFooter>
                {session?.user ? (
                    <NavUser user={session.user} />
                ) : (
                    <Button variant="secondary" asChild>
                        <Link href="/api/auth/signin">Sign in</Link>
                    </Button>
                )}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
