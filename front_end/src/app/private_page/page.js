import Link from "next/link";

export default function page() {
  return (
    <div>
        <p>Private Page</p>
        <Link href={"/login"}>Login</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"public_page"}>Public page</Link>
    </div>
  )
}
