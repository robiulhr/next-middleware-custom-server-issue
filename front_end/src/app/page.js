import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white w-full h-full">
      <p>Home page</p>
      <Link href={"/login"}>Login page</Link>
      <Link href={"/private_page"}>Private Page</Link>
      <Link href={"/public_page"}>Public Page</Link>
    </div>
  )
}
