import type { Metadata } from "next"
import { env } from "@/env.js"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { LogOutButtons } from "@/app/(auth)/_components/logout-buttons"


export default function SignOutPage() {
  return (
    <Shell className="max-w-md">
      <PageHeader className="text-center">
        <PageHeaderHeading size="sm" className="text-black">Sign out</PageHeaderHeading>
        <PageHeaderDescription size="sm" className="text-muted-foreground">
          Are you sure you want to sign out?
        </PageHeaderDescription>
      </PageHeader>
      <LogOutButtons />
    </Shell>
  )
}
