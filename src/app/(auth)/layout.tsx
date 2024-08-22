import Logo from "@/components/logo";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div className="relative aspect-video size-full bg-[url('/background.gif')]
       bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 flex items-center justify-center">
          <Logo className="scale-100 mt-auto mb-5 lg:scale-150 lg:m-0" textColor="white" />
        </div>
      </div>
      <main className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center bg-transparent lg:bg-white lg:static lg:left-0 lg:top-0 lg:flex lg:translate-x-0 lg:translate-y-0">
        {children}
      </main>
    </div>
  );
}
