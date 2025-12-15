"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--primary": "#ff66bf", // Set primary color
        } 
      }
      toastOptions={{
        style: {
          border: "1px solid #ff66bf",
          backgroundColor: "#fff0f8",
          color: "#2e0f1f",
        },
        className: "rounded-xl shadow-lg px-4 py-3 font-medium text-sm",
      }}
      {...props}
    />
  )
}

export { Toaster }
