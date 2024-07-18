import { Footer } from "./_component/footer";
import {Header} from "./_component/header/header";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
