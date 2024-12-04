// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div 
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-600 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        props.className,
      )}
      {...props}  
    />
  )
}
