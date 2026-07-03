import * as userService from "@/services/user.service";

export default async function UsersPage() {
  const users = await userService.getUsers();

  return (
    <main className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <h2 className="font-semibold">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}