import Link from "next/link";

export default function page() {
  return (
    <div>
      <p>Login page</p>
      <Link href={"/"}>Home</Link>
      <Link href={"/private_page"}>Private Page</Link>
      <Link href={"/public_page"}>Public Page</Link>

    </div>
  )
}
