'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className="flex justify-between items-center gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">
        {text}
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export default SelectItem
