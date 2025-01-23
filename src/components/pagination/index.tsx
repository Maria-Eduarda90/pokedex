"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
    currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
    const router = useRouter();

    const goToPage = (page: number) => {
        router.push(`/home?page=${page}`);
    };

    return (
        <div className="flex justify-center space-x-4 mt-6">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-cyan-500 rounded text-white disabled:opacity-50"
            >
                Previous
            </button>
            <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-4 py-2 bg-cyan-500 rounded text-white"
            >
                Next
            </button>
        </div>
    );
}
