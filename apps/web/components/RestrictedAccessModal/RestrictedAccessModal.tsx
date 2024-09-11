import { Lock, X } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@repo/ui/components/ui/dialog"
import { Button } from '@repo/ui/components/ui/button'
import { useState } from 'react'
import Link from 'next/link'
import { LEAD_URL_001 } from '~/constants/urls'

interface RestrictedAccessModalProps {
  isOpen: boolean
  onClose?: () => void
}

export function RestrictedAccessModal({ isOpen, onClose }: RestrictedAccessModalProps) {
    const handleClose = () => {
        onClose?.();
    }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Dostęp Ograniczony</DialogTitle>
          <Button 
            className="absolute right-4 top-4" 
            onClick={handleClose}
            variant="ghost"
            size="icon"
            asChild
          >

            <span className="sr-only">Zamknij</span>
          </Button>
        </DialogHeader>
        <div className="mt-6 mb-6 text-center">
          <Lock className="mx-auto my-4 h-8 w-8" />
          <DialogDescription className="text-lg">
            Ta funkcja jest dostępna tylko dla zarejestrowanych użytkowników.
          </DialogDescription>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Button onClick={handleClose} variant="outline" className="w-full sm:w-auto text-md">
            Może później
          </Button>
          <Link href={LEAD_URL_001}>
          <Button className="w-full sm:w-auto text-md hover:bg-brandBackground bg-brandAccent">
            Zarejestruj się teraz
          </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}