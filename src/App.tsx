function ProfilePicture({ userId }: { userId: string }) {
  return (
    <img
      src={"https://avatars.githubusercontent.com/u/" + userId}
      alt="GitHub Profile"
    />
  );
}

function ProfileLink({ username }: { username: string }) {
  return <a href={"https://github.com/" + username}>{username}</a>;
}

function GithubInfo({
  username,
  userId,
}: {
  username: string;
  userId: string;
}) {
  return (
    <div className="github-info">
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex justify-center ">
      <GithubInfo username="daffaazka" userId="25724809" />
    </div>
  );
}
