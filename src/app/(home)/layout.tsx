import Header from "./_component/header";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      {children}
    </div>
  );
}
