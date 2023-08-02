"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
    name: z.string().min(1),
})

export const StoreModal = () => {
    const StoreModal = useStoreModalStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    return (
    <Modal 
    title="Create Store"
    description="Add a new store to manage produts and categories"
    isOpen={StoreModal.isOpen}
    onClose={StoreModal.onClose}
    >
        Future Create Store Form
    </Modal>
    )
}