import RegesterFrom from '@/components/auth/RegesterFrom'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <section class="h-screen grid place-items-center">
    <div
      class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
    >
      <h4 class="font-bold text-2xl">Register</h4>
      <RegesterFrom />

      <span class="text-center text-xs text-gray-500">
        Already have an account?
        <Link href="/login" class="underline hover:text-indigo-600"
          >Login</Link>
      </span>
    </div>
  </section>
  )
}

export default RegisterPage
