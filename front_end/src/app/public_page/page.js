import Link from "next/link";

export default function page() {
  return (
    <div>
        <p>Public Page</p>
        <Link href={"/login"}>Login</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"private_page"}>Private page</Link>
    </div>
  )
}
