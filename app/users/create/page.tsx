import { createUser } from "@/actions/user.action";

export default function CreateUserPage() {
  return (
    <main className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Create User</h1>

      <form action={createUser} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border rounded p-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded p-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          Create User
        </button>
      </form>
    </main>
  );
}