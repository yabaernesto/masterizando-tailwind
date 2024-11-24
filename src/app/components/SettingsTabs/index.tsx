'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
    >
      <ScrollArea.Root className="w-full" type="hover">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List  className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-400">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currentTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currentTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currentTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currentTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={currentTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={currentTab === 'tab9'}
            />
            <TabItem value="tab10" title="API" isSelected={currentTab === 'tab10'} />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-2.5 touch-none select-none flex-col bg-zinc-100 p-0.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb 
            className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" 
          />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
