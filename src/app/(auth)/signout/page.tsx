"use client";

import { Button } from '~/app/_components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/app/_components/ui/card';
import { signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation';

export default function SignOutPage() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') ?? '/';

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Sign Out</CardTitle>
                            <CardDescription>
                                Are you sure you want to sign out?
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button
                                        variant="destructive"
                                        onClick={() => signOut({
                                            callbackUrl
                                        })}
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}