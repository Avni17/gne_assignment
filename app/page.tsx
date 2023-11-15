import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user-details">User Details</Link>
        </li>
        <li>
          <Link href="/register">Account Creation</Link>
        </li>
      </ul>
    </>
  )
}
