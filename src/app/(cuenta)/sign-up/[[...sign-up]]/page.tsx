import { SignUp } from "@clerk/nextjs";

export default function CrearCuenta() {
  return (
    <div className="flex items-center justify-center flex-col gap-10}">
      <h1 className="text-4xl font-bold my-16">Crear Cuenta</h1>

      <SignUp />
    </div>
  );
}
