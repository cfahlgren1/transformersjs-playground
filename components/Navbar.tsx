import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex justify-end py-4">
        <Button variant="ghost" asChild className="p-2 sm:p-4">
          <Link href="https://huggingface.co/docs/transformers.js/en/index" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FileText className="h-4 w-4 mr-2 sm:mr-2" />
            <span className="font-medium">Docs</span>
          </Link>
        </Button>
      </div>
    </nav>
  )
}