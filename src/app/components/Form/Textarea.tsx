// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from "react"

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-600 dark:focus:border-violet-500 dark:focus:ring-violet-500/10 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}
