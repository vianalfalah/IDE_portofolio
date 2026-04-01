'use client'

import { useState, useCallback } from "react"
import TitleBar from "./ide/TitleBar"
import Sidebar from "./ide/Sidebar"
import TabBar from "./ide/TabBar"
import Breadcrumb from "./ide/Breadcrumb"
import EditorContent from "./ide/EditorContent"
import StatusBar from "./ide/StatusBar"
import Terminal from "./ide/Terminal"

interface IDEShellProps {
  initialFile?: string
  files?: string[]
}

const DEFAULT_FILES = ["readme", "about", "projects", "contact"]

export function IDEShell({
  initialFile = "readme",
  files = DEFAULT_FILES,
}: IDEShellProps) {
  const [activeFile, setActiveFile] = useState<string>(initialFile)
  const [openTabs, setOpenTabs] = useState<string[]>([initialFile])

  const handleFileSelect = useCallback((file: string) => {
    setActiveFile(file)
    setOpenTabs((prev) => (prev.includes(file) ? prev : [...prev, file]))
  }, [])

  const handleTabClose = useCallback((tab: string) => {
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== tab)
      if (next.length === 0) return ["readme"]
      return next
    })
    if (activeFile === tab) {
      setActiveFile((prev) => {
        const tabs = openTabs.filter((t) => t !== tab)
        return tabs.length > 0 ? tabs[tabs.length - 1] : "readme"
      })
    }
  }, [activeFile, openTabs])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeFile={activeFile} onFileSelect={handleFileSelect} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar
            openTabs={openTabs}
            activeTab={activeFile}
            onTabSelect={setActiveFile}
            onTabClose={handleTabClose}
          />
          <Breadcrumb activeFile={activeFile} />
          <EditorContent activeFile={activeFile} />
          <Terminal />
        </div>
      </div>
      <StatusBar activeFile={activeFile} />
    </div>
  )
}

export default IDEShell
