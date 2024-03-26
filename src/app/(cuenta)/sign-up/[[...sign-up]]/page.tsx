import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10}">
      <h1 className="text-4xl font-bold my-16">this is SignUp page</h1>

      <SignUp />
    </div>
  );
}
