import { useCurrentUser } from "../hooks/useCurrentUser";
export function Test() {
  const userStuff = useCurrentUser();

  switch (userStuff.state) {
    case "USER_NEED_PROFILE":
      return <div>{userStuff.ui}</div>;

    default:
      throw new Error("NOT GOOD");
  }

  if (userStuff.state) {
  }

  return (
    <div>
      HEYYYY
      <div>
        {userStuff.state}
        {Object.keys(userStuff).map((k) => (
          <p>{k}</p>
        ))}
      </div>
    </div>
  );
}
