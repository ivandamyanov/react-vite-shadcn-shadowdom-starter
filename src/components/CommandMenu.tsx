"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export default function CommandDialogMenu() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const commandListContent = (
        <CommandList className="justify-center">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                <CommandItem>
                    <Calendar />
                    <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                    <Smile />
                    <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                    <Calculator />
                    <span>Calculator</span>
                </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
                <CommandItem>
                    <User />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                    <CreditCard />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                    <Settings />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
            </CommandGroup>
        </CommandList>

    )

    return (
        <>
            <p className="text-primary">
                Press{" "}
                <kbd className="bg-primary text-primary-foreground pointer-events-none inline-flex h-8 items-center gap-1 rounded border px-1.5 font-mono text-[16px] font-medium opacity-100 select-none mr-1">
                    <span className="text-sm">⌘/CTRL + J</span>
                </kbd>
                for command menu
            </p>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                {commandListContent}
            </CommandDialog>
        </>
    )
}
