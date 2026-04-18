import { ButtonHTMLAttributes } from 'react'

const Button = ({
  children,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-6 py-2 bg-[#3a5a40] text-white rounded-md hover:bg-[#2d4633] focus:outline-none focus:ring-2 focus:ring-[#a3b18a] focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed
        focus:ring-offset-[#f8f7f5]`}
      disabled={disabled}
      // a11y fix: Ensure focus visibility for PWA and keyboard navigation
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
---