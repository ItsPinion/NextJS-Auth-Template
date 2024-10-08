import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shell } from "@/components/shell";
import { OAuthSignIn } from "@/app/(auth)/_components/oauth-signin";
import { SignUpForm } from "@/app/(auth)/_components/signup-form";

export default function SignUpPage() {
  return (
    <Shell className="max-w-lg">
      <Card className="bg-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl text-black">
            Sign up
          </CardTitle>
          <CardDescription className="text-center">
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                aria-label="Sign in"
                href="/signin"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign in
              </Link>
            </div>{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-black">Or continue with</span>
            </div>
          </div>
          <SignUpForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Shell>
  );
}
