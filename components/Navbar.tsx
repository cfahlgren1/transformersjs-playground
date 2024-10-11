import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileText, Github } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        <Link href="/" className="text-lg font-bold">
          Playground
        </Link>
        <div className="flex items-center">
          <Button variant="ghost" asChild className="p-2 sm:p-4 mr-2">
            <Link href="https://huggingface.co/docs/transformers.js/en/index" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              <span className="font-medium">Docs</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="p-2 sm:p-4">
            <Link href="https://github.com/cfahlgren1/transformersjs-playground" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              <span className="font-medium hidden sm:inline">Star on GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}