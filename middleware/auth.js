export default async function({store, redirect}) {
  const token = await store.state.users.token;
  if(!token) return redirect('/login');
}