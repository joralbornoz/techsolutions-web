function showUsers() {
  return user.map(u => `${u.name} (${u.age})`);
}