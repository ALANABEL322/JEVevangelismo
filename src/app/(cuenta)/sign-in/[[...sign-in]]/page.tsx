import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10}">
      <h1 className="text-4xl font-bold my-20">this is SignIn page</h1>

      <SignIn />
    </div>
  );
}
