import { SignIn } from "@clerk/nextjs";

export default function Registrarse() {
  return (
    <div className="flex items-center justify-center flex-col gap-10}">
      <h1 className="text-4xl font-bold my-20">Registrarse</h1>

      <SignIn />
    </div>
  );
}
